import Vue from 'vue'
import Router from 'vue-router'

import BigScreenRouter from './bigscreen.router'
import Home from '../views/Home'

import RptVerify from '../views/RptVerify'
import ListScroll from '../views/ListScroll'
import ImgView from '../views/ImgView'
import NumScroll from '../views/NumScroll'
import CountTo from '../views/CountTo'
import Vueditor from '../views/Vueditor'
import HP from '../views/HP'
import HPChina from '../views/HPChina'

Vue.use(Router)


const BaseRouter = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/rptVerify',
    name: 'RptVerify',
    component: RptVerify
  },
  {
    path: '/listScroll',
    name: 'ListScroll',
    component: ListScroll
  },
  {
    path: '/imgView',
    name: 'ImgView',
    component: ImgView
  },
  {
    path: '/numScroll',
    name: 'NumScroll',
    component: NumScroll
  },
  {
    path: '/countTo',
    name: 'CountTo',
    component: CountTo
  },
  {
    path: '/vueditor',
    name: 'Vueditor',
    component: Vueditor
  },
  {
    path: '/hp',
    name: 'HP',
    component: HP
  }
  ,
  {
    path: '/hpChina',
    name: 'HPChina',
    component: HPChina
  }
]
const routes = BaseRouter.concat(BigScreenRouter)
export default new Router({
  routes
})
