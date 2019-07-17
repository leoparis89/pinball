import Matter from 'matter-js'
import settings from './settings'
const { Engine, Render, World, Bodies } = Matter

const engine = Engine.create({})

export const world = engine.world
export const bodies: any[] = []

createMatterFrame()

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

function createMatterFrame() {
  const matterFrame = document.createElement('div')
  matterFrame.id = 'matter-frame'
  matterFrame.style.position = 'fixed'
  matterFrame.style.opacity = '0.5'
  document.body.appendChild(matterFrame)
}
