import * as Matter from 'matter-js'
import settings from './settings'
const { Engine, Render, World, Bodies } = Matter

const engine = Engine.create({})
const world = engine.world

createFrame()

const render = Render.create({
  element: document.getElementById('matter-frame')!,
  engine,
  options: {
    height: settings.screenH,
    width: settings.screenW,
  },
})

Engine.run(engine)
Render.run(render)

function createFrame() {
  const matterFrame = document.createElement('div')
  matterFrame.id = 'matter-frame'
  matterFrame.style.position = 'fixed'
  matterFrame.style.opacity = '0.5'
  document.body.appendChild(matterFrame)
}
