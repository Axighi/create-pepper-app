import { loadPage, setReaderData, setLoading, updatePrinterStatus } from '../actions';
import { store } from '../index';
import CONSTS from '../constants';
import ReconnectingWebSocket from 'reconnecting-websocket';
import EventEmitter from 'eventemitter3';

export function findGetParameter(parameterName) {
  let result = null
  let tmp = []
  location.search
    .substr(1)
    .split('&')
    .forEach((item) => {
      tmp = item.split('=')
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]).split('/')[0]
    })
  return result
}

export function cancelProcedure() {
  store.dispatch(setLoading(true));
  fetch(`${CONSTS.API_PREFIX}externalAsk.action?id=${CONSTS.PEPPER_ID}&q=取消`)
  .then(res => res.json())
  .then(json => {
    store.dispatch(setLoading(false));
    store.dispatch(loadPage(json))
    store.dispatch(updatePrinterStatus(''));
  })
  .catch(err => {
    store.dispatch(setLoading(false));
    store.dispatch(updatePrinterStatus(''));
    console.warn(err)
  });
}

export function getTicket(ext) {
  let done = false;
  const ee = new EventEmitter();

  ee.on('start_reading', (id_info_json) => {
    const { idcode, name } = id_info_json.data;

    fetch(`${CONSTS.API_PREFIX}queue.action?
      ct=身份证
      &no=${idcode}
      &name=${name}
      &bt1=${ext.data.bt1}
      &bt2=${ext.data.bt2}
      &bn=${ext.data.bn}`
    )
    .then(queue_res => queue_res.json())
    .then(queue_json => {
      ee.emit('start_printing', queue_json);
    })
  });

  ee.on('start_printing', (queue_json) => {
    let printed = false;
    if (!printed) {
      const { branch_name, ticket, waiting, business_type1, business_type2, business_name, time } = queue_json;
      store.dispatch(updatePrinterStatus('printing'));
      fetch(`${CONSTS.READER_HOST}print?
        &terminal=101
        &resp_code=000000000
        &resp_msg=成功
        &branch_name=${branch_name}
        &ticket=${ticket}
        &waiting=${waiting}
        &business_type1=${business_type1}
        &business_type2=${business_type2}
        &business_name=${business_name}
        &time=${time}
        `
      )
      .then(print_res => print_res.json())
      .then((print_json) => {
        if (print_json.data === 'success' && !printed) {
          done = true;
          printed = true;
          window.pepper.say('请拿好您的小票,稍后将为您服务', () => cancelProcedure());
          store.dispatch(updatePrinterStatus('success'));
        }
      })
      .catch(err => {
        console.warn(err);
        window.pepper.say('打印小票失败');
        store.dispatch(updatePrinterStatus('failed'));
      })
    }
  });

  const print = setInterval(() => {
    const currentPath = location.hash;

    if (!done) {
       fetch(`${CONSTS.READER_HOST}id_info?time=${new Date()}`)
      .then(id_info_res => id_info_res.json())
      .then(id_info_json => {
        if (currentPath !== location.hash) {
          done = true;
          clearInterval(print);
          return;
        }

        if (id_info_json.data) {
          done = true;
          ee.emit('start_reading', id_info_json);
          // window.pepper.say('请刷身份证');
          clearInterval(print);
        }
      })
      .catch(err => {
        console.warn('Cannot visit idcard reader.');
        done = true;
        clearInterval(print);
      });
    }
  }, 3000);
}