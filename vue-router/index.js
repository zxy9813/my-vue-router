import install from '../vue-router/install'
import createMatcher from 
class VueRouter{
    constructor(options){
        // 创建匹配器的过程 1.匹配功能 2.可以添加匹配
        console.log(options);
        this.matcher = createMatcher(options.routes || []); // 获取用户的整个配置
    }
    init(app) { // 目前这个app指代的就是最外层new Vue
        // 需要根据用户配置 做一个映射表来

    }
}
VueRouter.install = install;

export default VueRouter;