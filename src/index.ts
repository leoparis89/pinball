import * as PIXI from 'pixi.js'

import * as Matter from 'matter-js'
const { Engine, Render, World, Bodies } = Matter

const engine = Engine.create()
const world = engine.world
const box = Bodies.rectangle(50, 50, 80, 80)
console.log(box)
World.add(world, [box])
Engine.run(engine)

const app = new PIXI.Application({ width: 800, height: 600 })

// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)

const circle = new PIXI.Graphics()
circle.beginFill(0x9966ff)
circle.drawRect(50, 50, 80, 80)
circle.endFill()
app.stage.addChild(circle)

const loader = new PIXI.Loader()
loader.load(() => {
  app.ticker.add(delta => gameLoop(delta))
})
function gameLoop(delta) {
  console.log('bar')
  circle.x = box.position.x
  circle.y = box.position.y
}
// const canvasH = 1000
// const canvasW = 800

// // create a renderer
// const render = Render.create({
//   element: document.body,
//   engine,
//   options: {
//     height: canvasH,
//     width: canvasW,
//     // wireframes: false,
//   },
// })

// // Ground
// const groundW = 20
// const ground = Bodies.rectangle(
//   canvasW / 2,
//   canvasH - groundW / 2,
//   canvasW,
//   groundW,
//   { isStatic: true },
// )

// // Walls
// const wallW = 20
// const leftWall = Bodies.rectangle(wallW / 2, canvasH / 2, wallW, canvasH, {
//   isStatic: true,
// })
// const rightWall = Bodies.rectangle(
//   canvasW - wallW / 2,
//   canvasH / 2,
//   wallW,
//   canvasH,
//   { isStatic: true },
// )

// Spikes
// const step = 80
// const spikeH = 90
// const spikeW = 10
// const spikes = []

// const leftWall = Bodies.rectangle(10, 30, 50, 30)
// const circle = Bodies.circle()
// for (let i = step; i < canvasW; i += step) {
//   console.log(i)
//   spikes.push(
//     Bodies.rectangle(
//       i - spikeW / 2,
//       canvasH - spikeH / 2 - groundW,
//       spikeW,
//       spikeH,
//       { isStatic: true },
//     ),
//   )
// }

// World.add(engine.world, [ground, leftWall])

// run the engine
// Engine.run(engine)

// // run the renderer
// Render.run(render)
