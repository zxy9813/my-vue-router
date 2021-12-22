import RouterView from './components/router-view'
import RouterLink from './components/router-link'
let Vue = null;

const install = function (_Vue) {
    Vue = _Vue;

    Vue.component('router-link', RouterLink)

    Vue.component('router-view', RouterView)
    
    // 用户将router属性注册到了new Vue

    // 希望每个子组件 都可以获取到router属性

    Vue.mixin({
        beforeCreate() { // mixin 可以给beforeCreate 这个生命周期增加合并的方法
            // 如果有router 说明你在实例上增加了router 当前这个事例是根实例
            // 渲染流程先父后子，渲染完毕 先子后父
            if (this.$options.router) {
                // 根
                this._routerRoot = this; // 将当前根实例放到了_routerRoot
                this._router = this.$options.router;
                // 用户传来的属性router 而router = new VueRouter 所以router.init是调用VueRouter里的方法
                this._router.init(this);
                // 用什么才使current普通值改变时 引发视图改变呢？，$set只是增加一个属性，defineObjectProperty只是多了get set
                // 可以使用Vue.util.directive  defineReactive可以做到 自动依赖收集，并且可以把对象转成响应式
                Vue.util.defineReactive(this,'_route',this._router.history.current);
            }else {
                // 子组件
                this._routerRoot = this.$parent && this.$parent._routerRoot;

            }
            // 这里所有的组件都拥有了 this,_routerRoot属性
            console.log(this._routerRoot._router);
        }
    })
}

export default install;