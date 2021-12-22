export const createRoute = (record,location) => { //根据匹配到的记录来计算匹配到的所有记录
    let matched = [];
    if(record){
        while(record){

            matched.unshift(record);
            record = record.parent; // 通过当前记录找到所有的父亲 /about/a
        }
        
    }
    return {
        ...location,
        matched
    }
}
export default class History {
    constructor(router){
        this.router = router;

        // 这个代表的是 当前路径匹配出来的记录
        // / 匹配的是 {path:'/',component:Home}
        // /about/A 匹配的是 {path:'about',component:about}和{path:'/about/A',component:A},因为about也一定会被渲染
        this.current = createRoute(null,{
            path:'/'
        })
        // this.current = {path;'/',matched:[]}
    }
    transitionTo(location,complete) {

        // 获取当前路径匹配出对应的记录，当路径变化时获取对应的记录 =》 渲染页面
        // (router-view实现的)
        // 通过路径拿到对应的记录 有了记录之后 就可以找到对应的匹配

        // 每一次切换路由，重新得到当前路由组匹配
        let current = this.router.match(location);

        // 防止重复点击 不需要再次渲染 当前路径和current比对 匹配到的个数和路径都是相同的 就不需要再次跳转了
        if (this.current.path == location && this.current.matched.length === current.matched.length) {
            return;
        }

        this.current = current;
        this.cb && this.cb(current);
        // 当路径变化后 current属性会更新操作
        console.log('cccc',this.current);
        complete && complete();
        console.log(location); // 匹配路径
    }
    listen(cb) {
        this.cb = cb;
    }
}
