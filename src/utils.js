export async function fetchData() {
  try {
    const response = await fetch('./data/about.json')
    const json = await response.json()
    return json
  } catch (error) {
    console.error(new Error(error))
    return {}
  }
}

// returns a random integer between the min/max
export function random(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// document element selector
export const DOM = {
  get: (selector) => document.querySelector(selector),
  getAll: (selector) => [...document.querySelectorAll(selector)],
}

// converts text to camelCase
export function camelCase(str) {
  return str
    .toLowerCase()
    .replace(/([-_\s][a-z])/g, (group) =>
      group.toUpperCase().replace(/[-_\s]/g, '')
    )
}

/**
 * returns an object with all existing selectable elements inside the given selector.
 * eg:
 *
 * <div class="foo">
 *   <div class="bar">
 *     <svg class="svg"></svg>
 *   </div>
 *   <span class="baz"></span>
 * </div>
 *
 * const foo = getNodes('.foo')
 * foo // <div class="foo"></div>
 * foo.bar // <div class="bar"></div>
 * foo.baz // <span class="baz"></span>
 * foo.svg // <svg class="svg"></svg>
 */
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
