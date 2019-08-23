import Matter, { Bodies, World } from 'matter-js'
// tslint:disable-next-line:ordered-imports
import './matterService'
import { world } from './matterService'
import { makePaddles } from './pinballPartz'
import './pixiService'
import { RenderedBody } from './RenderedBody'
export const bodies: any[] = []
// bodies.push(b)
document.getElementById('matter-frame')!.addEventListener('click', e => {
  // const b = new Box(e.offsetX, e.offsetY, 30, 30)
  const box = Bodies.circle(e.offsetX, e.offsetY, 40)
  const final = new RenderedBody(e.offsetX, e.offsetY, box)
  bodies.push(final)
})

const makeFLoor = () => {
  const body = Bodies.rectangle(200, 750, 400, 20, { isStatic: true })
  World.add(world, body)
}

makeFLoor()

const makeStopper = () => {
  const c = Matter.Bodies.circle(160, 591, 40, {
    isStatic: true,
    render: {
      visible: true,
    },
    plugin: {
      attractors: [
        // stopper is always a, other body is b
        function(bodyA, bodyB) {
          return {
            x: (bodyA.position.x - bodyB.position.x) * 0.002,
            y: (bodyA.position.y - bodyB.position.y) * 0.002,
          }
        },
        // function(a, b) {
        //   // if (b.label === attracteeLabel) {
        //   //   const isPaddleUp =
        //   //     side === 'left' ? isLeftPaddleUp : isRightPaddleUp
        //   //   const isPullingUp = position === 'up' && isPaddleUp
        //   //   const isPullingDown = position === 'down' && !isPaddleUp
        //   //   if (isPullingUp || isPullingDown) {
        //   //     return {
        //   //       x: (a.position.x - b.position.x) * PADDLE_PULL,
        //   //       y: (a.position.y - b.position.y) * PADDLE_PULL,
        //   //     }
        //   //   }
        //   // }
        // },
      ],
    },
    // collisionFilter: {
    //   // group: stopperGroup, // },
  } as any)
  Matter.World.add(world, [c])
}

makeStopper()

makePaddles()
// export function gameLoop() {

//   console.log('bar')
// }
// export const foo = 5
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
// const makeImage = (x, y, h, w) => { //   const image = new PIXI.Graphics() //   image.beginFill(0x9966ff) //   image.drawRect(0, 0, h, w)
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
