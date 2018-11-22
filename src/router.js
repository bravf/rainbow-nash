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
import DropdownTest from './views/DropdownTest'
import GridTest from './views/GridTest'
import LoadingTest from './views/LoadingTest'
import MenuTest from './views/MenuTest'
import PageTest from './views/PageTest'
import SelectTest from './views/SelectTest'
import TagTest from './views/TagTest'
import ProgressTest from './views/ProgressTest'
import RadioTest from './views/RadioTest'
import TableTest from './views/TableTest'
import TabsTest from './views/TabsTest'
import TimelineTest from './views/TimelineTest'
import TimepickerTest from './views/TimepickerTest'
import TooltipTest from './views/TooltipTest'
import TreeTest from './views/TreeTest'
import UploadTest from './views/UploadTest'
import FormTest from './views/FormTest'
import MessageTest from './views/MessageTest'
import ModalTest from './views/ModalTest'

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
    {
      path: '/dropdown',
      name: 'dropdown',
      component: DropdownTest,
    },
    {
      path: '/grid',
      name: 'grid',
      component: GridTest,
    },
    {
      path: '/loading',
      name: 'loading',
      component: LoadingTest,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuTest,
    },
    {
      path: '/page',
      name: 'page',
      component: PageTest,
    },
    {
      path: '/select',
      name: 'select',
      component: SelectTest,
    },
    {
      path: '/tag',
      name: 'tag',
      component: TagTest,
    },
    {
      path: '/progress',
      name: 'progress',
      component: ProgressTest,
    },
    {
      path: '/radio',
      name: 'radio',
      component: RadioTest,
    },
    {
      path: '/table',
      name: 'table',
      component: TableTest,
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: TabsTest,
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: TimelineTest,
    },
    {
      path: '/timepicker',
      name: 'timepicker',
      component: TimepickerTest,
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: TooltipTest,
    },
    {
      path: '/tree',
      name: 'tree',
      component: TreeTest,
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadTest,
    },
    {
      path: '/form',
      name: 'form',
      component: FormTest,
    },
    {
      path: '/message',
      name: 'message',
      component: MessageTest,
    },
    {
      path: '/modal',
      name: 'modal',
      component: ModalTest,
    },
  ]
})
