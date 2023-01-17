const DataView = resolve => require(['../views/DataViews'], resolve)
const BigScreenRouter = [
  {
    name: 'DataView',
    path: '/dataView',
    component: DataView,
    meta: {
      title: '大屏'
    },
    keepAlive: true
  }
]
export default BigScreenRouter