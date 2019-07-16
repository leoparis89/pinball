import * as PIXI from 'pixi.js'

import * as Matter from 'matter-js'
import { debug } from 'webpack'
const { Engine, Render, World, Bodies } = Matter

const engine = Engine.create({})
const world = engine.world
// const box = Bodies.rectangle(50, 50, 80, 80)
// console.log(box)
// World.add(world, [box])
Engine.run(engine)

const HEIGHT = 600
const WIDTH = 800

const Boxes: any[] = []
const app = new PIXI.Application({ width: WIDTH, height: HEIGHT })

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
  // const cat = new PIXI.Sprite(loader.resources['assets/cat.png'].texture)
  // cat.x = 96
  // cat.y = 96

  // const rectangle = new PIXI.Graphics()
  // rectangle.lineStyle(4, 0xff3300, 1)
  // rectangle.beginFill(0x66ccff)
  // rectangle.drawRect(0, 0, 64, 64)
  // rectangle.endFill()
  // rectangle.x = 170
  // rectangle.y = 170j
  // app.stage.addChild(rectangle)
  // // Add the cat to the stage
  // app.stage.addChild(cat)
  // cat.visible = false
  console.log(app)
  // makeImage(0, 500, 800, 30)
  // makeBody(0, 500, 800, 30, true)

  const ground = Bodies.rectangle(WIDTH / 2, HEIGHT - 25, WIDTH, 50, {
    isStatic: true,
  })
  World.add(world, ground)
})

function loadProgressHandler(loader, resource) {
  // Display the file `url` currently being loaded
  console.log('loading: ' + resource.url)

  // Display the percentage of files currently loaded
  console.log('progress: ' + loader.progress + '%')
}

function gameLoop(delta) {
  Boxes.forEach(b => b.refresh())
}

window.document.querySelector('canvas')!.addEventListener('click', e => {
  // const newB = new MyBox(390, 200, 30, 30)
  // Boxes.push(newB)
  Boxes.push(new Box(e.offsetX, e.offsetY, 60, 60))
  // app.stage.addChild(makeImage(e.x, e.y))
})

const makeImage = (x, y, h, w) => {
  const image = new PIXI.Graphics()
  image.beginFill(0x9966ff)
  image.drawRect(0, 0, h, w)
  image.endFill()
  // const image = new PIXI.Sprite(loader.resources['assets/cat.png'].texture)
  app.stage.addChild(image)
  return image
}

const makeBody = (x, y, h, w, isStatic?) => {
  const body = Bodies.rectangle(x, y, h, w, { isStatic })
  World.add(world, body)
  return body
}

class Box {
  image
  body

  constructor(x, y, h, w) {
    this.image = makeImage(x, y, h, w)
    this.body = makeBody(x, y, h, w)
  }
  refresh() {
    this.image.x = this.body.position.x
    this.image.y = this.body.position.y
  }
}
