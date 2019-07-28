import { Bodies, Constraint, World } from 'matter-js'
import Matter from 'matter-js'
import { Box, makeImage } from './Box'
// tslint:disable-next-line:ordered-imports
import './matterService'
import { world } from './matterService'
import './pixiService'

export const bodies: any[] = []
// bodies.push(b)
document.getElementById('matter-frame')!.addEventListener('click', e => {
  const b = new Box(e.offsetX, e.offsetY, 30, 30)
  bodies.push(b)
})

const makeFLoor = () => {
  const body = Bodies.rectangle(200, 750, 400, 20, { isStatic: true })
  World.add(world, body)
}
makeFLoor()

// const makePin = () => {
//   const p = Bodies.trapezoid(170, 200, 20, 80, 0.33, {
//     angle: 1.57,
//     isStatic: true,
//   })
//   World.add(world, p)

//   const vert = p.vertices
//   const input = vert
//     .map(({ x, y }) => [x, y])
//     .map(el => [el[0], el[1]])
//     .reduce((acc, curr) => {
//       acc = [...acc, ...curr]
//       return acc
//     }, [])

//   makeImage(input)
// }
// makePin()

// const body = Bodies.polygon(30, 150, 5, 30)

// const constraint = Constraint.create({
//   pointA: { x: 70, y: 100 },
//   bodyB: body,
//   pointB: { x: 0, y: 0 },
// })

// World.add(world, body)
// World.add(world, constraint)

// const revol = () => {
//   // add revolute constraint
//   const body = Bodies.rectangle(600, 200, 200, 20)
//   // const ball = Bodies.circle(550, 150, 20)

//   const constraint = Constraint.create({
//     pointA: { x: 600, y: 200 },
//     bodyB: body,
//     length: 0,
//   })
//   World.add(world, [body, constraint] as any)
// }

// revol()
const makePaddles = () => {
  // this group lets paddle pieces overlap each other
  const paddleGroup = Matter.Body.nextGroup(true)

  // Left paddle mechanism
  const paddleLeft = {} as any
  paddleLeft.paddle = Matter.Bodies.trapezoid(170, 660, 20, 80, 0.33, {
    label: 'paddleLeft',
    angle: 1.57,
    chamfer: {},
    render: {
      // fillStyle: COLOR.PADDLE,
    },
  })

  paddleLeft.brick = Matter.Bodies.rectangle(172, 672, 40, 80, {
    angle: 1.62,
    chamfer: {},
    render: {
      visible: false,
    },
  })
  paddleLeft.comp = Matter.Body.create({
    label: 'paddleLeftComp',
    parts: [paddleLeft.paddle, paddleLeft.brick],
  })
  paddleLeft.hinge = Matter.Bodies.circle(142, 660, 5, {
    isStatic: true,
    render: {
      // visible: false,
    },
  })

  Object.values(paddleLeft).forEach((piece: any) => {
    piece.collisionFilter.group = paddleGroup
  })

  paddleLeft.con = Matter.Constraint.create({
    bodyA: paddleLeft.comp,
    pointA: { x: -29.5, y: -8.5 },
    bodyB: paddleLeft.hinge,
    length: 0,
    stiffness: 0,
  })
  // paddleLeft.con = Matter.Constraint.create({
  //   bodyA: paddleLeft.comp,
  //   pointA: { x: -29.5, y: -8.5 },
  //   bodyB: paddleLeft.hinge,
  //   length: 0,
  //   stiffness: 0,
  // })
  Matter.World.add(world, [paddleLeft.comp, paddleLeft.hinge, paddleLeft.con])
  // Matter.Body.rotate(paddleLeft.comp, 0.57, { x: 142, y: 660 })
  // // this group lets paddle pieces overlap each other
  // // const paddleGroup = Matter.Body.nextGroup(true)
  // // const paddleGroup = Matter.Body.nextGroup(true)
  // // Left paddle mechanism
  // const paddleLeft = {} as any
  // paddleLeft.paddle = Matter.Bodies.trapezoid(170, 460, 20, 80, 0.33, {
  //   label: 'paddleLeft',
  //   angle: 1.57,
  //   chamfer: {},
  //   render: {
  //     // fillStyle: COLOR.PADDLE,
  //   },
  // })
  // paddleLeft.hinge = Matter.Bodies.circle(142, 460, 5, {
  //   isStatic: true,
  //   render: {
  //     visible: true,
  //   },
  // })
  // const constraint = Constraint.create({
  //   pointA: { x: 170, y: 460 },
  //   // bodyA: paddleLeft.hinge,
  //   pointB: { x: -25, y: 0 },
  //   bodyB: paddleLeft.paddle,
  //   // pointB: { x: -30, y: -9 },
  //   // bodyB: paddleLeft.hinge,
  //   length: 300,
  //   stiffness: 1,
  // })
  // const stopper = Matter.Bodies.circle(240, 400, 40, {
  //   plugin: {
  //     attractors: [
  //       (bodyA, bodyB) => {
  //         return {
  //           x: (bodyA.position.x - bodyB.position.x) * 1e-3,
  //           y: (bodyA.position.y - bodyB.position.y) * 1e-3,
  //         }
  //       },
  //     ],
  //   },
  //   isStatic: true,
  //   render: {
  //     // visible: false,
  //   },
  // } as any)
  // // paddleLeft.hinge = Matter.Bodies.circle(142, 660, 5, {
  // //   isStatic: true,
  // //   render: {
  // //     visible: true,
  // //   },
  // // })
  // // paddleLeft.con = Matter.Constraint.create({
  // //   bodyA: paddleLeft.comp,
  // //   pointA: { x: -29.5, y: -8.5 },
  // //   bodyB: paddleLeft.hinge,
  // //   length: 0,
  // //   stiffness: 0,
  // // })
  // Object.values(paddleLeft).forEach(piece => {
  //   // piece.collisionFilter.group = paddleGroup
  //   console.log(piece)
  // })
  // // paddleLeft.brick = Matter.Bodies.rectangle(172, 372, 40, 80, {
  // //   angle: 1.62,
  // //   chamfer: {},
  // //   render: {
  // //     // visible: false,
  // //   },
  // // })
  // // paddleLeft.comp = Matter.Body.create({
  // //   label: 'paddleLeftComp',
  // //   parts: [paddleLeft.paddle, paddleLeft.brick],
  // // })
  // Matter.World.add(world, [paddleLeft.paddle, constraint, stopper])
}
makePaddles()

// invisible bodies to constrict paddles
function stopper(x, y, side, position) {
  // determine which paddle composite to interact with
  // const attracteeLabel = side === 'left' ? 'paddleLeftComp' : 'paddleRightComp'

  return Matter.Bodies.circle(x, y, 40, {
    isStatic: true,
    render: {
      visible: false,
    },
    // collisionFilter: {
    //   // group: stopperGroup,
    // },
  })
}
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
