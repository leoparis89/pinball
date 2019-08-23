import { Bodies, World } from 'matter-js'
// tslint:disable-next-line:ordered-imports
import './matterService'
import { world } from './matterService'
import { makePaddles, makeStopper } from './pinballPartz'
import './pixiService'
import { RenderedBody } from './RenderedBody'
export const bodies: any[] = []

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

// makeStopper()

makeStopper(180, 640, false)
makeStopper(180, 560, true)

makePaddles(150, 600)
