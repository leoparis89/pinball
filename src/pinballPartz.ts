import Matter from 'matter-js'
// tslint:disable-next-line:ordered-imports
import './matterService'
import { world } from './matterService'
import './pixiService'
import { renderBody } from './RenderedBody'

interface IPaddle {
  paddle
  hinge
  constraint
}

export const makePaddles = (x: number, y: number, rightSide?: boolean) => {
  // this group lets paddle pieces overlap each other
  const paddleGroup = Matter.Body.nextGroup(true)

  const paddle = Matter.Bodies.trapezoid(x, y, 20, 80, 0.33, {
    label: 'paddle' + (rightSide ? 'Right' : 'Left'),

    angle: rightSide ? -1.57 : 1.57,
    chamfer: {},
    collisionFilter: {
      group: paddleGroup,
    } as any,
    render: {
      // fillStyle: COLOR.PADDLE,
    },
  })

  renderBody(paddle)

  const hinge = Matter.Bodies.circle(x, y, 5, {
    isStatic: true,
    collisionFilter: {
      group: paddleGroup,
    } as any,
    render: {},
  })

  const constraint = Matter.Constraint.create({
    bodyA: paddle,
    pointA: { x: rightSide ? 15 : -15, y: 0 },
    bodyB: hinge,
    length: 0,
    stiffness: 0,
  })

  const paddleLeft: IPaddle = {
    paddle,
    hinge,
    constraint,
  }

  Matter.World.add(world, [
    // paddleLeft.paddle,
    paddleLeft.hinge,
    paddleLeft.constraint,
  ])
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

export const makeStopper = (
  x: number,
  y: number,
  active,
  rightSide?: boolean,
) => {
  const c = Matter.Bodies.circle(x, y, 10, {
    isStatic: true,
    render: {
      visible: true,
    },
    plugin: {
      attractors: [
        (bodyA, bodyB) => {
          if (bodyB.label !== 'paddle' + (rightSide ? 'Right' : 'Left')) {
            return
          }

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
