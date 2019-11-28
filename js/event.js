function event(game) {
  document.addEventListener('keydown', e => {
    e.preventDefault()
    const code = e.keyCode
    if (code === 38) {
      game.move('up')
    } else if (code === 39) {
      game.move('right')
    } else if (code === 40) {
      game.move('fall')
    } else if (code === 37) {
      game.move('left')
    } else if (code === 32) {
      game.move('rotate')
    } else {
      return
    }
  })

  document.querySelector('.fail-again').onclick = () => {
    game.restart()
  }
  document.querySelector('.win-again').onclick = () => {
    game.restart()
  }
}