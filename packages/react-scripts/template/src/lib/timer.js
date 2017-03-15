export default class Timer {
  constructor(time = 10, cb = () => console.log('null callback')) {
    this.time = time
    this.cb = cb
    this.remain = time * 1000
  }

  start() {
    this.startTime = new Date()
    this.remain = this.time * 1000
    clearTimeout(this.timeoutID)
    this.timeoutID = setTimeout(() => {
      this.cb()
    }, this.remain)
  }

  pause() {
    if (this.remain > 0) {
      const now = new Date()
      this.remain = now - this.startTime
      clearTimeout(this.timeoutID)
    }
  }

  resume() {
    this.startTime = new Date()
    this.timeoutID = setTimeout(() => {
      this.remain = 0
      this.cb()
    }, this.remain)
  }

  restart() {
    this.start();
  }

  clear() {
    clearTimeout(this.timeoutID)
    this.timeoutID = undefined
  }
}
