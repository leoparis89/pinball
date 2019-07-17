import { bodies } from '.'

export function gameLoop(delta) {
  bodies.forEach(e => e.refresh())
}
