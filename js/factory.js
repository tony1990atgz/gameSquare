const SQUARE_COUNT = 7
function squareFactory(dir) {
  this.dir = dir
  this.origin = {
    x: 0,
    y: getRandomNumber(CUR_WIDTH_SIZE - 4)
  }
  this.getSquare = () => {
    return this.rotate[this.dir]
  }
}

function square(dir) {
  squareFactory.call(this,dir)
  this.rotate = [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]
  ]
}

function square1(dir) {
  squareFactory.call(this, dir)
  this.rotate = [
    [
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ]
  ]
}

function square2(dir) {
  squareFactory.call(this, dir)
  this.rotate = [
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [1, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ]
  ]
}
function square3(dir) {
  squareFactory.call(this, dir)
  this.rotate = [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 1],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ]
  ]
}

function square4(dir) {
  squareFactory.call(this, dir)
  this.rotate = [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ]
  ]
}

function square5(dir) {
  squareFactory.call(this, dir)
  this.rotate = [
    [
      [0, 0, 0, 0],
      [1, 1, 1, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [1, 0, 1, 0],
      [1, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 1, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ]
  ]
}

function square6(dir) {
  squareFactory.call(this, dir)
  this.rotate = [
    [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [1, 0, 0, 1],
    ],
    [
      [1, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [1, 0, 0, 0],
    ],
    [
      [1, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 1],
      [0, 1, 1, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
    ]
  ]
}
function square7(dir) {
  squareFactory.call(this, dir)
  this.rotate = [
    [
      [0, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [1, 0, 0, 0],
    ],
    [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
    [
      [0, 0, 0, 1],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [1, 0, 0, 0],
    ],
    [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1],
    ],
  ]
}
function factory(type, dir) {
  type = type || getRandomNumber(SQUARE_COUNT)
  dir = dir || getRandomNumber(3)
  let ret
  switch (type) {
    case 0:
      ret = new square(dir)
      break;
    case 1:
      ret = new square1(dir)
      break;
    case 2:
      ret = new square2(dir)
      break;
    case 3:
      ret = new square3(dir)
      break;
    case 4:
      ret = new square4(dir)
      break;
    case 5:
      ret = new square5(dir)
      break;
    case 6:
      ret = new square6(dir)
      break;
    case 7:
      ret = new square7(dir)
      break;
    default:
      break;
  }
  return ret
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * (max + 1))
}