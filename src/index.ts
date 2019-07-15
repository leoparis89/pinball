import * as PIXI from 'pixi.js'
const app = new PIXI.Application({ width: 256, height: 256 })

// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)

const circle = new PIXI.Graphics()
circle.beginFill(0x9966ff)
circle.drawCircle(0, 0, 32)
circle.endFill()
circle.x = 64
circle.y = 130
app.stage.addChild(circle)
// import * as Matter from 'matter-js'

// const { Engine, Render, World, Bodies } = Matter

// const canvasH = 1000
// const canvasW = 800

// // create an engine
// const engine = Engine.create()

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
