import * as PIXI from 'pixi.js'

import * as Matter from 'matter-js'
const { Engine, Render, World, Bodies } = Matter

const engine = Engine.create({})
const world = engine.world
// const box = Bodies.rectangle(50, 50, 80, 80)
// console.log(box)
// World.add(world, [box])
Engine.run(engine)

const Boxes: any[] = []
const app = new PIXI.Application({ width: 800, height: 600 })

// Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)

// const circle = new PIXI.Graphics()
// circle.beginFill(0x9966ff)
// circle.drawRect(50, 50, 80, 80)
// circle.endFill()
// app.stage.addChild(circle)

const loader = new PIXI.Loader()

loader
  .add(['assets/aquaBall.png', 'assets/bomb.png', 'assets/cat.png'])
  .on('progress', loadProgressHandler)
// .load(setup)

loader.load(() => {
  app.ticker.add(delta => gameLoop(delta))
  const cat = new PIXI.Sprite(loader.resources['assets/cat.png'].texture)
  cat.x = 96
  cat.y = 96

  const rectangle = new PIXI.Graphics()
  rectangle.lineStyle(4, 0xff3300, 1)
  rectangle.beginFill(0x66ccff)
  rectangle.drawRect(0, 0, 64, 64)
  rectangle.endFill()
  rectangle.x = 170
  rectangle.y = 170
  app.stage.addChild(rectangle)
  // Add the cat to the stage
  app.stage.addChild(cat)
  // cat.visible = false
  console.log(app)
})

function loadProgressHandler(loader, resource) {
  // Display the file `url` currently being loaded
  console.log('loading: ' + resource.url)

  // Display the percentage of files currently loaded
  console.log('progress: ' + loader.progress + '%')

  // If you gave your files names as the first argument
  // of the `add` method, you can access them like this
  // console.log("loading: " + resource.name);
}

// class MyBox {
//   body
//   image
//   constructor(x, y, w, h) {
//     this.body = Bodies.rectangle(x, y, w, h)
//     World.add(world, this.body)
//     this.image = new PIXI.Graphics()
//     this.image.beginFill(0x9966ff)
//     this.image.drawRect(x, y, w, h)
//     this.image.endFill()
//     app.stage.addChild(this.image)
//   }

//   show() {
//     this.image.x = this.body.position.x
//     this.image.y = this.body.position.y
//   }
// }

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

// const bar = new MyBox(30, 30, 50, 50)

// Boxes.push(bar)

function gameLoop(delta) {
  Boxes.forEach(b => b.refresh())
}

// window.onclick = e => {
//   const newB = new MyBox(0, 0, 30, 30)
//   Boxes.push(newB) // }

// window.document.querySelector('canvas').addEventListener('onClick', e => {
//   debugger
// })

window.document.querySelector('canvas')!.addEventListener('click', e => {
  // const newB = new MyBox(390, 200, 30, 30)
  // Boxes.push(newB)
  Boxes.push(new Box(e.x, e.y))
  // app.stage.addChild(makeImage(e.x, e.y))
})

const makeImage = (x, y) => {
  const image = new PIXI.Graphics()
  image.beginFill(0x9966ff)
  image.drawRect(x, y, 40, 40)
  image.endFill()
  // const image = new PIXI.Sprite(loader.resources['assets/cat.png'].texture)
  app.stage.addChild(image)
  return image
}

//     this.body = Bodies.rectangle(x, y, w, h)
//     World.add(world, this.body)
const makeBody = (x, y) => {
  const body = Bodies.rectangle(0, 0, 40, 40)
  World.add(world, body)
  return body
}
class Box {
  image
  body

  constructor(x, y) {
    this.image = makeImage(x, y)
    this.body = makeBody(x, y)
  }
  refresh() {
    this.image.x++
    console.log(this.image.x)
    // this.image.y++
    this.image.x = this.body.position.x
    // console.log('image ' + this.image.x)
    this.image.y = this.body.position.y
  }
}

console.log(window.document.querySelector('canvas'))
