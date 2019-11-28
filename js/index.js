// window.addEventListener('load', () => {
//   var view = new View()
//   var game = new Game()
//   game.init(view)
//   event(game)
// })

const start = document.querySelector('.start')
const startcontainer = document.querySelector('.start-container')
start.onclick = () => {
  var view = new View()
  var game = new Game({
    interval: 1000,
    cols: 20,
    rows: 20
  })
  game.init(view)
  event(game)
  startcontainer.classList.remove('action')
}