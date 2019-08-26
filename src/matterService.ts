import MatterAttractors from 'matter-attractors'
import Matter from 'matter-js'
Matter.use(MatterAttractors)
import settings from './settings'
const { Engine, Render, World, Bodies } = Matter

const engine = Engine.create({})

export const world = engine.world

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
  matterFrame.style.display = 'inline-block'
  // matterFrame.style.position = 'fixed'
  // matterFrame.style.opacity = '1'
  document.body.appendChild(matterFrame)
}

export function addToWorld(body) {
  World.add(world, body)
}
