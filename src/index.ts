import './matterService'
import './pixiService'

import { loader } from './pixiService'
// import * as Matter from 'matter-js'

// const { Engine, Render, World, Bodies } = Matter

// const HEIGHT = 300
// const WIDTH = 300
// const engine = Engine.create({})
// const world = engine.world

// const render = Render.create({
//   element: document.body,
//   engine,
//   options: {
//     height: HEIGHT,
//     width: WIDTH,
//   },
// })

// Engine.run(engine)

// const box = Bodies.rectangle(50, 50, 80, 80)

// World.add(world, [box])
// const app = new PIXI.Application({ width: WIDTH, height: HEIGHT })

// Add the canvas that Pixi automatically created for you to the HTML document
// document.body.appendChild(app.view)

// const circle = new PIXI.Graphics()
// circle.beginFill(0x9966ff)
// circle.drawRect(50, 50, 80, 80)
// circle.endFill()
// app.stage.addChild(circle)

// const loader = new PIXI.Loader()

// // loader
// //   .add(['assets/aquaBall.png', 'assets/bomb.png', 'assets/cat.png'])
// //   .on('progress', loadProgressHandler)
// // .load(setup)

// // function gameLoop(delta) {
// //   Boxes.forEach(b => b.refresh())
// // }

// // window.document.querySelector('canvas') &&
// //   window.document.querySelector('canvas')!.addEventListener('click', e => {
// //     // const newB = new MyBox(390, 200, 30, 30)
// //     // Boxes.push(newB)
// //     Boxes.push(new Box(e.offsetX, e.offsetY, 60, 60))
// //     // app.stage.addChild(makeImage(e.x, e.y))
// //   })

// const makeImage = (x, y, h, w) => {
//   const image = new PIXI.Graphics()
//   image.beginFill(0x9966ff)
//   image.drawRect(0, 0, h, w)
//   image.endFill()
//   // const image = new PIXI.Sprite(loader.resources['assets/cat.png'].texture)
//   // app.stage.addChild(image)
//   return image
// }

// const makeBody = (x, y, h, w, isStatic?) => {
//   const body = Bodies.rectangle(x, y, h, w, { isStatic })
//   World.add(world, body)
//   return body
// }

// class Box {
//   image
//   body

//   constructor(x, y, h, w) {
//     this.image = makeImage(x, y, h, w)
//     this.body = makeBody(x - h / 2, y, h, w)
//   }
//   refresh() {
//     this.image.x = this.body.position.x
//     this.image.y = this.body.position.y
//   }
// }
