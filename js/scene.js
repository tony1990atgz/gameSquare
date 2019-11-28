var View = (function () {

  const mainDivs = []
  const nextDivs = []
  const $main = document.querySelector('.main-box')
  const $next = document.querySelector('.sub-box')
  const $win = document.querySelector('.winning-container')
  const $fail = document.querySelector('.failure-container')
  const $winscore = document.querySelector('.win-score')
  const $score = document.querySelector('#score')
  const $scoreanimation = document.querySelector('.score-animation')

  function View() {

  }

  View.prototype = {
    init(mainOpts, nextOpts, winscore, isTest) {
      this.initGameData(mainOpts, winscore, isTest)
      this.initGameScene(mainOpts)
      this.initNextScene(nextOpts)
      this.createSquare()
      this.update()
    },
    initGameData(mainOpts, winscore, isTest) {
      $winscore.innerHTML = this.winscore
      CUR_HEIGHT_SIZE = mainOpts.rows
      CUR_WIDTH_SIZE = mainOpts.cols
      this.isTest = isTest
      this.winscore = winscore
      this._resetMainData()
    },
    _resetMainData() {
      for (let i = 0; i < CUR_HEIGHT_SIZE; i++) {
        main[i] = []
        for (let j = 0; j < CUR_WIDTH_SIZE; j++) {
          main[i][j] = 0
        }
      }
    },
    initGameScene(opts) {
      for (let i = 0; i < CUR_HEIGHT_SIZE; i++) {
        for (let j = 0; j < CUR_WIDTH_SIZE; j++) {
          let div = this._createDiv(i, j, opts)
          mainDivs.push(div)
          $main.appendChild(div)
        }
      }
      this.setSceneWH($main, opts)
    },
    initNextScene(opts) {
      for (let i = 0; i < NEXT_SIZE; i++) {
        for (let j = 0; j < NEXT_SIZE; j++) {
          let div = this._createDiv(i, j, opts)
          nextDivs.push(div)
          $next.appendChild(div)
        }
      }
      this.setSceneWH($next, opts)
    },
    setSceneWH(dom, opts) {
      const {width, height, cols, rows} = opts
      dom.style.width = width * cols + 'px'
      dom.style.height = height * rows + 'px'
    },
    _createDiv(x, y, opts) {
      const {width, height} = opts
      let div = document.createElement('div')
      div.setAttribute('index', x + '-' + y)
      div.style.left = y * width + 'px'
      div.style.top = x * height + 'px'
      div.style.width = width + 'px'
      div.style.height = height + 'px'
      return div
    },
    createSquare() {
      if (!next) {
        cur = factory()
      } else {
        cur = nextInstance
      }
      current = cur.getSquare()
      this.origin = cur.origin

      nextInstance = factory()
      next = nextInstance.getSquare()

    },
    restart() {
      this._resetData()
      this._resetDom()
      this._resetScene()
    },
    _resetData() {
      cur = null
      current = null
      next = null
      myscore = 0
      this.clearData(main)
    },
    _resetDom() {
      $score.innerHTML = 0
      $win.classList.remove('action')
      $fail.classList.remove('action')
    },
    _resetScene() {
      this.createSquare()
      this.update()
    },
    clearData(data) {
      const cols = data[0].length
      const rows = data.length
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          data[i][j] = 0
        }
      }
    },
    update() {
      this.updateData()
      this.updateView()
    },
    updateData(val) {
      if (val == 0) {
        val = val + ''
      }
      const {
        x,
        y
      } = this.origin
      for (let i = 0; i < NEXT_SIZE; i++) {
        for (let j = 0; j < NEXT_SIZE; j++) {
          if (this._check(this.origin, i, j)) {
            main[i + x][y + j] = val || current[i][j]
          }
        }
      }
    },
    updateView() {
      this.updateMainView()
      this.updateNextView()
    },
    updateMainView() {
      this.refreshDivClassByStatus(mainDivs, main)
    },
    updateNextView() {
      this.refreshDivClassByStatus(nextDivs, next)
    },
    refreshDivClassByStatus(divs, data) {
      const cols = data[0].length
      const rows = data.length
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          divs[cols * i + j].className = this._getDivClassByStatus(data[i][j])
        }
      }
      // if (this.isTest) {
      //   this._createTestView(main)
      //   this._createTestView(next)
      // }
    },
    _getDivClassByStatus(status) {
      const cal = status === 1 ?
        'current' : status === 2 ?
        'exist' : 'none'
      return 'square ' + cal
    },
    _createTestView(data) {
      let test = ''
      const cols = data[0].length
      const rows = data.length
      for (let i = 0; i < rows; i++) {
        test += '\n'
        for (let j = 0; j < cols; j++) {
          if (data[i][j] != 0) {
            if (data[i][j] === 2) {
              test += '■'
            } else {
              test += '+'
            }
          } else {
            test += '□'
          }
        }
      }
      console.log(test)
    },
    fall() {
      while (this.down()) {}
    },
    move(dir) {
      const tester = this._createTest(dir)
      if (this._isMoveValid(tester)) {
        this.updateData(0)
        this.origin = Object.assign({}, tester)
        this.update()
        return true
      } else {
        return false
      }
    },
    down() {
      const flag = this._down()
      if (!flag) {
        this.updateDowned()
        this.createSquare()
        this.update()
      }
      return flag
    },
    updateDowned() {
      for (let i = 0; i < CUR_HEIGHT_SIZE; i++) {
        for (let j = 0; j < CUR_WIDTH_SIZE; j++) {
          if (main[i][j] === 1) {
            main[i][j] = 2
          }
        }
      }
      this.disappear()
    },
    disappear() {
      let add = 0
      for (let i = CUR_HEIGHT_SIZE - 1; i >= 0; i--) {
        let clear = true
        for (let j = 0; j < CUR_WIDTH_SIZE; j++) {
          if (main[i][j] !== 2) {
            clear = false
            break
          }
        }
        if (clear) {
          this.disappearRow(i)
          // this.disappearAnimate(i)
          add++
          i++
          this.isyouWin()
        }
      }
      if (add > 0) {
        this.addScore(add)
      }
    },
    addScore(add) {
      myscore += add
      $score.innerHTML = myscore
      animate()

      function animate() {
        $scoreanimation.style.display = 'inline-block'
        setTimeout(() => {
          $scoreanimation.classList.add('action')
          $scoreanimation.innerHTML = '+' + add
          setTimeout(() => {
            $scoreanimation.classList.remove('action')
            $scoreanimation.removeAttribute('style')
          }, 1000);
        }, 20);
      }
    },
    disappearRow(row) {
      for (let i = row; i > 0; i--) {
        for (let j = 0; j < CUR_WIDTH_SIZE; j++) {
          main[i][j] = main[i-1][j]
        }
      }
      for (let i = 0; i < CUR_WIDTH_SIZE; i++) {
        main[0][i] = 0
      }
    },
    disappearAnimate(row) {
      const data = main[row]
      const len = data.length
      for (let i = 0; i < len; i++) {
        mainDivs[row * len + i].classList.add('disappear')
      }
    },
    _down() {
      return this.move('down')
    },
    left() {

      this.move('left')
    },
    right() {
      this.move('right')
    },
    up() {
      this.move('up')
    },
    rotate() {
      this._rotate()
    },
    _rotate() {
      const temp = Object.assign({}, current)
      const dir = cur.dir + 1
      const rotate = cur.rotate
      current = rotate[dir % 4]
      if (!this._isMoveValid()) {
        current = temp
      } else {
        cur.dir++
        this.update()
      }
    },
    _isMoveValid(pos) {
      pos = pos || this.origin
      for (let i = 0; i < NEXT_SIZE; i++) {
        for (let j = 0; j < NEXT_SIZE; j++) {
          if (current[i][j] !== 0) {
            if (!this._check(pos, i, j)) {
              return false
            }
          }
        }
      }
      return true
    },
    _check(pos, x, y) {
      if (pos.x + x < 0) {
        return false
      } else if (pos.x + x >= CUR_HEIGHT_SIZE) {
        return false
      } else if (pos.y + y < 0) {
        return false
      } else if (pos.y + y >= CUR_WIDTH_SIZE) {
        return false
      } else if (main[pos.x + x][pos.y + y] === 2) {
        return false
      }
      return true
    },
    _createTest(dir) {
      let tester = Object.assign({}, this.origin)
      if (dir === 'down') {
        tester.x++
      } else if (dir === 'left') {
        tester.y--
      } else if (dir === 'right') {
        tester.y++
      } else if (dir === 'up') {
        tester.x--
      }
      return tester
    },
    youWin() {
      $win.classList.add('action')
    },
    youLose() {
      $fail.classList.add('action')
    },
    isyouWin() {
      if (myscore >= this.winscore) {
        this.youWin()
        return true
      } else {
        return false
      }
    },
    isyouLose() {
      return !this._isMoveValid()
    }
  }
  return View
})()