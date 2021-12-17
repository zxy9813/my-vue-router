import createRouteMap from './create-route-map'
export default function createMatcher(routes) {

  // 传过来的routes使用不方便 转一下格式
  let {pathList, pathMap} = createRouteMap(routes);

  function match() {
    
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