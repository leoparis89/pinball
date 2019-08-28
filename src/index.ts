import { Bodies, World } from 'matter-js'
import { bodies } from './gameLoop'
// tslint:disable-next-line:ordered-imports
import './matterService'
import { world } from './matterService'
import { makePaddles, makeStopper } from './pinballPartz'
import './pixiService'
import { renderBody, RenderedBody } from './RenderedBody'
import settings from './settings'

document.getElementById('matter-frame')!.addEventListener('click', e => {
  // const b = new Box(e.offsetX, e.offsetY, 30, 30)
  const box = Bodies.rectangle(e.offsetX, e.offsetY, 10, 30)
  renderBody(box)
})

const makeFLoor = () => {
  const body = Bodies.rectangle(200, 750, 400, 20, { isStatic: true })
  World.add(world, body)
}

makeFLoor()

// makeStopper()

const paddleDist = 150
makeStopper(paddleDist + 30, 640, false)
makeStopper(paddleDist + 30, 560, true)
makePaddles(paddleDist, 600)

makeStopper(settings.screenW - paddleDist - 30, 640, false, true)
makeStopper(settings.screenW - paddleDist - 30, 560, true, true)
makePaddles(settings.screenW - paddleDist, 600, true)
