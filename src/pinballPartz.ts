import Matter from 'matter-js'
// tslint:disable-next-line:ordered-imports
import './matterService'
import { world } from './matterService'
import './pixiService'

interface IPaddle {
  paddle
  hinge
  constraint
}

export const makePaddles = (x: number, y: number) => {
  // this group lets paddle pieces overlap each other
  const paddleGroup = Matter.Body.nextGroup(true)

  const paddle = Matter.Bodies.trapezoid(x, y, 20, 80, 0.33, {
    label: 'paddleLeft',
    angle: 1.57,
    chamfer: {},
    collisionFilter: {
      group: paddleGroup,
    } as any,
    render: {
      // fillStyle: COLOR.PADDLE,
    },
  })

  const hinge = Matter.Bodies.circle(x, y, 5, {
    isStatic: true,
    collisionFilter: {
      group: paddleGroup,
    } as any,
    render: {
      // visible: false,
    },
  })

  const constraint = Matter.Constraint.create({
    bodyA: paddle,
    pointA: { x: -15, y: 0 },
    bodyB: hinge,
    length: 0,
    stiffness: 0,
  })

  const paddleLeft: IPaddle = {
    paddle,
    hinge,
    constraint,
  }

  // paddleLeft.con = Matter.Constraint.create({
  //   bodyA: paddleLeft.comp,
  //   pointA: { x: -29.5, y: -8.5 },
  //   bodyB: paddleLeft.hinge,
  //   length: 0,
  //   stiffness: 0,
  // })
  Matter.World.add(world, [
    paddleLeft.paddle,
    paddleLeft.hinge,
    paddleLeft.constraint,
  ])
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

let isUp = false

document.onkeydown = e => {
  if (e.code === 'Space') {
    isUp = true
    console.log(isUp)
  }
}

document.onkeyup = e => {
  if (e.code === 'Space') {
    isUp = false
    console.log(isUp)
  }
}

export const makeStopper = (x: number, y: number, active) => {
  const c = Matter.Bodies.circle(x, y, 10, {
    isStatic: true,
    render: {
      visible: true,
    },
    plugin: {
      attractors: [
        (bodyA, bodyB) => {
          return {
            x:
              (bodyA.position.x - bodyB.position.x) *
              (active && isUp ? 0.002 : 0.0),
            y:
              (bodyA.position.y - bodyB.position.y) *
              (active && isUp ? 0.002 : 0.0),
          }
        },
      ],
    },
    // collisionFilter: {
    //   // group: stopperGroup, // },
  } as any)
  Matter.World.add(world, [c])
}
