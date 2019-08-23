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

export const makePaddles = () => {
  // this group lets paddle pieces overlap each other
  const paddleGroup = Matter.Body.nextGroup(true)

  const paddle = Matter.Bodies.trapezoid(170, 660, 20, 80, 0.33, {
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

  const hinge = Matter.Bodies.circle(142, 660, 5, {
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

export const makeStopper = () => {
  const c = Matter.Bodies.circle(110, 591, 40, {
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
