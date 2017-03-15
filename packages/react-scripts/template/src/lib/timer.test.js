import Timer from './timer';

jest.useFakeTimers();

it('execute callback in expected time', () => {
  const callback = jest.fn();
  const timer = new Timer(5, callback);

  expect(callback).not.toBeCalled();

  timer.start();

  jest.runTimersToTime(5000);

  expect(callback).toBeCalled();
  expect(callback.mock.calls.length).toBe(1);
});