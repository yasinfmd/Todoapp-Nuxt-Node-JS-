import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52940341 = () => interopDefault(import('..\\pages\\Dashboard\\index.vue' /* webpackChunkName: "pages_Dashboard_index" */))
const _3ac978c8 = () => interopDefault(import('..\\pages\\Todos\\index.vue' /* webpackChunkName: "pages_Todos_index" */))
const _781e84e2 = () => interopDefault(import('..\\pages\\Todos\\OldTodos\\index.vue' /* webpackChunkName: "pages_Todos_OldTodos_index" */))
const _3e206bff = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/Dashboard",
      component: _52940341,
      name: "Dashboard"
    }, {
      path: "/Todos",
      component: _3ac978c8,
      name: "Todos"
    }, {
      path: "/Todos/OldTodos",
      component: _781e84e2,
      name: "Todos-OldTodos"
    }, {
      path: "/",
      component: _3e206bff,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
