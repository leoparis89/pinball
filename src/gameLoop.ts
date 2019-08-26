export const bodies: any[] = []

export function gameLoop(delta) {
  bodies.forEach(e => e.refresh())
}
