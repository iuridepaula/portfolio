import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NProgress from 'nprogress'

Vue.use(Router)

const TITLE = 'iuri.is'
const URL = 'https://iuri.is/'
const ABOUT =
  'Frontend developer heavily influenced by storytelling, interactions, and UX. Addicted to music, visual arts, and games.'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '.is()',
      component: Home,
      meta: {
        title: TITLE,
        bodyClass: 'page-home',
        metaTags: [
          {
            name: 'description',
            content: ABOUT,
          },
          // facebook
          {
            name: 'og:title',
            content: TITLE,
          },
          {
            name: 'og:url',
            content: URL,
          },
          {
            name: 'og:description',
            content: ABOUT,
          },
          // twitter
          {
            name: 'twitter:title',
            content: TITLE,
          },
          {
            name: 'twitter:url',
            content: URL,
          },
          {
            name: 'twitter:description',
            content: ABOUT,
          },
        ],
      },
    },
    {
      path: '/about',
      name: '.about()',
      component: () => import('./views/About.vue'),
      meta: {
        title: 'iuri.about',
        bodyClass: 'page-about',
        metaTags: [
          {
            name: 'description',
            content: ABOUT,
          },
          // facebook
          {
            name: 'og:title',
            content: 'iuri.about',
          },
          {
            name: 'og:url',
            content: URL + 'about',
          },
          {
            name: 'og:description',
            content: ABOUT,
          },
          // twitter
          {
            name: 'twitter:title',
            content: 'iuri.about',
          },
          {
            name: 'twitter:url',
            content: URL + 'about',
          },
          {
            name: 'twitter:description',
            content: ABOUT,
          },
        ],
      },
    },
    {
      path: '/preview/:character',
      name: 'Preview',
      component: () => import('./views/Preview.vue')
    },
    {
      path: '*',
      name: `.err(404)`,
      component: () => import('./views/404.vue'),
      meta: {
        title: `iuri.err(404)`,
        bodyClass: 'page-err404',
        metaTags: [
          {
            name: 'description',
            content: 'Ops! Page not found',
          },
          // facebook
          {
            name: 'og:title',
            content: `iuri.err(404)`,
          },
          {
            name: 'og:url',
            content: URL,
          },
          {
            name: 'og:description',
            content: 'Ops! Page not found',
          },
          // twitter
          {
            name: 'twitter:title',
            content: `iuri.err(404)`,
          },
          {
            name: 'twitter:url',
            content: URL,
          },
          {
            name: 'twitter:description',
            content: 'Ops! Page not found',
          },
        ],
      },
    },
  ],
})

// progress bar
NProgress.configure({
  easing: 'ease-out',
  speed: 500,
  trickleSpeed: 100,
  showSpinner: false,
})

router.beforeEach((to, _from, next) => {
  document.body.classList.add('locked')
  NProgress.start()
  // remove classes to avoid styles conflicts
  document.body.classList.remove(
    '-mario-lock',
    '-mario-easter-egg',
    '-bit16',
    '-mario-played',
    '-open-nav',
    '-mario-bg',
    '-admin-bg',
    '-confianca-bg',
    '-desbravando-bg'
  )

  // Update meta tags
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title)
  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags)
  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title
  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(
    el => el.parentNode.removeChild(el)
  )
  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()
  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement('meta')
      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })
      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')
      return tag
    })
    .forEach(tag => document.head.appendChild(tag))

  next()
})

router.afterEach(() => {
  // wait for intro transitions
  setTimeout(() => {
    window.scroll(0, 0)
    NProgress.done()

    document.body.classList.remove(
      'locked',
      '-mario-lock',
      '-mario-easter-egg',
      '-bit16',
      '-mario-played',
      '-open-nav',
      '-mario-bg',
      '-admin-bg',
      '-confianca-bg',
      '-desbravando-bg'
    )
  }, 1000)
})

export default router
