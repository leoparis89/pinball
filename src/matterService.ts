import * as Matter from 'matter-js'
import settings from './settings'
const { Engine, Render, World, Bodies } = Matter

const engine = Engine.create({})
const world = engine.world

const render = Render.create({
  element: document.body,
  engine,
  options: {
    height: settings.screenH,
    width: settings.screenW,
  },
})

Engine.run(engine)
Render.run(render)
