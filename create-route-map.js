const addRouteRecord = (route, pathList, pathMap,parentRecord) => {
    let path = parentRecord? `${parentRecord.path}/${route.path}`:route.path;
    
    let record = { //根据当前路由产生一个记录
        path,
        component:route.component
    }
    if(!pathMap[path]) { // 防止用户编写路由时有重复的，不去覆盖

        pathMap[path] = record
        pathList.push(path)
    }
    // 要将子路由也放到对应的map和list上
    if(route.children){
        route.children.forEach(r=>{
            addRouteRecord(r,pathList,pathMap,record)
        })
    }
}

function createRouteMap (routes,oldPathList,oldPathMap) {
    debugger
    let pathList = oldPathList || [];
    let pathMap = oldPathMap || {};

    routes.forEach(route => {
        console.log('item',route);
        addRouteRecord(route,pathList,pathMap)
    });
    console.log(pathList,pathMap);
    return{
        pathList,
        pathMap
    }
}

export default createRouteMap;