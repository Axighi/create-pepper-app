import Naoqi from 'naoqi-sdk';
import { findGetParameter } from './helpers';

export default class Pepper {
  constructor() {
    const host = findGetParameter('qi') || '198.18.0.1';
    const qi = new Naoqi(host);
    this.connection = qi.connect();
  }

  autoSubscribe(event, callback) {
    this.subEvent(event, callback);
    this.connection.then(session => {
      session._socket.on('connect', () => {
        console.log(`Autosubscribed event ${event}.`)
        session.subEvent(event, callback)
      })
    })
    .catch(err => console.warn(err));
  }

  subEvent(event, callback) {
    this.connection.then(session => {
      console.log(`Subscribed event ${event}.`)
      session.subEvent(event, callback)
    })
    .catch(err => console.warn(err));
  }

  async asyncSay(saying, cb) {
    try {
      const session = await this.connection;
      const ALTextToSpeech = await session.service('ALTextToSpeech');
      await ALTextToSpeech.stopAll();
      const AXMAudio = await session.service('AXMAudio');
      await AXMAudio.speak(saying, '');
      if (cb) cb();
      console.log(saying);
    } catch (err) {
      console.warn(err);
    }
  }

  behave(behavior, cb) {
    console.log(`bahavior: ${behavior}`);
    if (!behavior) return;
    this.connection.then(session => {
      session.service('ALBehaviorManager')
      .then(ALBehaviorManager => ALBehaviorManager.runBehavior(behavior))
      // reset posture after finish action
      .then(() => session.service('ALRobotPosture'))
      .then(ALRobotPosture => ALRobotPosture.goToPosture('Stand', 1.0))
      .then(() => {
        if (cb) cb()
      })
    })
    .catch(err => console.warn(err));
  }

  ding() {
    this.connection.then(session => {
      session.service('ALTextToSpeech')
      .then(ALTextToSpeech => ALTextToSpeech.stopAll())
      .then(() => session.service('AXMUtils'))
      .then(AXMUtils => AXMUtils.touch_beep())
    })
    .catch(err => console.warn(err));
  }

  reload() {
    this.connection.then(session => {
      session.service('ALTabletService')
      .then(ALTabletService => ALTabletService.reloadPage(true))
    })
    .catch(err => console.warn(err));
  }
}

if (process.env.NODE_ENV === 'development') {
  window.pepper = new Pepper();
}
