import install from '../vue-router/install'
import createMatcher from '../create-matcher'
import HashHistory from './history/hashHistory';
import BrowserHistory from './history/browserHistory';
class VueRouter {
    constructor(options) {
        // 创建匹配器的过程 1.匹配功能 2.可以添加匹配
        console.log(options);
        this.matcher = createMatcher(options.routes || []); // 获取用户的整个配置

        // 创建历史管理 （路由两种模式 hash 浏览器api）
        this.mode = options.mode || 'hash';
        switch (this.mode) {
            case 'hash':
                this.history = new HashHistory(this);
                break;
            case 'history':
                this.history = new BrowserHistory(this);
                break;
        }
    }
    match(location) {
        return this.matcher.match(location);
    }
    init(app) { // 目前这个app指代的就是最外层new Vue
        // 需要根据用户配置 做一个映射表来
        console.log(app, 'app');

        // 需要根据当前路径 实现一下页面跳转的逻辑
        const history = this.history;

        // 跳转路径 会进行匹配操作 根据路径获取对应的记录

        let setupHashListener = () => {
            history.setupHashListener()
        }
        history.transitionTo(history.getCurrentLocation(),setupHashListener);

        history.listen((route)=>{
            app._route = route;
            console.log(app._route,'-------');

        });

        // transitionTo 跳转逻辑 hash、browser都有
        // getCurrentLocation hash和browser实现不一样
        // setupListener hash监听
    }
}
VueRouter.install = install;

export default VueRouter;