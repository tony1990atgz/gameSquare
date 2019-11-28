let Game = (function() {
  function game(options) {
    options = options || {}
    let defaultOptions = {
      main: {
        width: 40,
        height: 40,
        cols: 20,
        rows: 20
      },
      next: {
        width: 40,
        height: 40,
        cols: 4,
        rows: 4
      },
      interval: 100,
      test: false
    }
    const specialKeys = ['interval', 'winscore', 'test']

    for (let key in options) {
      if (options.hasOwnProperty(key)) {
        if (~specialKeys.indexOf(key)) {
          defaultOptions[key] = options[key]
        } else {
          defaultOptions.main[key] = options[key]
        }
      }
    }
    this.options = defaultOptions
  }

  game.prototype = {
    init(view) {
      const {main, next, test, winscore} = this.options
      view.init(main, next, winscore, test)
      this.autoDown()
      this.view = view

      if (test) {
        this.gameTest()
      }
    },
    gameTest() {
      this.testTimer = setInterval(() => {
        if (this.isGameOver()) {
          clearInterval(this.testTimer)
          return
        }
        this.move('fall')
      }, 100);
    },
    restart() {
      this.view.restart()
      this.autoDown()
    },
    autoDown() {
      this.timer = setTimeout(() => {
        this.autoDown()
        this.down()
      }, this.options.interval);
    },
    move(dir) {
      if (!this.isGameOver()) {
        this.view[dir]()
      } else {
        clearTimeout(this.timer)
        this.gameOver()
      }
    },
    down() {
      this.move('down')
    },
    isGameOver() {
      return this.isLose() || this.isWin()
    },
    isLose() {
      return this.view.isyouLose()
    },
    isWin() {
      return this.view.isyouWin()
    },
    gameOver() {
      if (this.isLose()) {
        this.view.youLose()
      }
    }
  }

  return game
})()
