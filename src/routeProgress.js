import { reactive } from 'vue'

// shared state so the router can drive the RouteProgress component
export const routeProgress = reactive({ active: false })

export function startRouteProgress() {
  routeProgress.active = true
}

export function doneRouteProgress() {
  routeProgress.active = false
}
