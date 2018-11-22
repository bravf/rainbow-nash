import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ButtonTest from './views/ButtonTest'
import AlertTest from './views/AlertTest'
import AppTest from './views/AppTest'
import BreadcrumbTest from './views/BreadcrumbTest'
import CardTest from './views/CardTest'
import CheckboxTest from './views/CheckboxTest'
import DatepickerTest from './views/DatepickerTest'
import InputTest from './views/InputTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/button',
      name: 'button',
      component: ButtonTest,
    },
    {
      path: '/alert',
      name: 'alert',
      component: AlertTest,
    },
    {
      path: '/app',
      name: 'app',
      component: AppTest,
    },
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: BreadcrumbTest,
    },
    {
      path: '/card',
      name: 'card',
      component: CardTest,
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: CheckboxTest,
    },
    {
      path: '/datepicker',
      name: 'datepicker',
      component: DatepickerTest,
    },
    {
      path: '/input',
      name: 'input',
      component: InputTest,
    },
  ]
})
