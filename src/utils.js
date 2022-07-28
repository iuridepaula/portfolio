export function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const DOM = {
  get: (selector) => document.querySelector(selector),
  getAll: (selector) => [...document.querySelectorAll(selector)],
}

export function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/([-_\s][a-z])/g, (group) =>
      group.toUpperCase().replace(/[-_\s]/g, '')
    )
}

export function getNodes(parentSelector) {
  const el = DOM.get(parentSelector)

  if (!el) return {}

  const allowedNodes = ['div', 'span', 'svg', 'g', 'ellipse', 'path'].map(
    (node) => `${parentSelector} ${node}`
  )

  const children = DOM.getAll(allowedNodes.join(','))

  children.forEach((child) => {
    if (child.classList[0]) {
      const childClass = child.classList[0].trim()
      el[camelCase(childClass)] = child || `.${childClass}`
    }
  })

  return el
}

// Home.vue helpers
export function removeBodyClass(...classes) {
  document.body.classList.remove(...classes)
}

export function addBodyClass(...classes) {
  if (document.querySelector('#app.page-home')) {
    document.body.classList.add(...classes)
  }
}

export function isReverse(e) {
  return e.scrollDirection === 'REVERSE'
}

export function isForward(e) {
  return e.scrollDirection === 'FORWARD'
}