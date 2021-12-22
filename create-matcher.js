import createRouteMap from './create-route-map'
import { createRoute } from './vue-router/history/base';
export default function createMatcher(routes) {
  // 动态添加路由 应用一般是菜单的权限

  // 传过来的routes使用不方便 转一下格式
  // pathList ['/','/about']
  // pathMap {/:{path:'/',component:Home}}
  let {pathList, pathMap} = createRouteMap(routes);
  function match(location) {
    let record = pathMap[location];
    return createRoute(record,{
      path:location
    })
  }

  function addRoutes(routes) {
    createRouteMap(routes,pathList,pathMap);
  }
  addRoutes([{path:'/xxx',component:'',children:[{path:'lili',component:'2'}]}])
  return {
      match,
      addRoutes
  }
}