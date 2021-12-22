import History from "./base";

const ensureSlash = () => {
    if(window.location.hash) {
        return;
    }else {
        window.location.hash = '/'
    }
}

export default class HashHistory extends History {
    constructor(router) {
        super(router);
        this.router = router;
        // 如果使用hashHistory 默认如果没有hash 应该跳转到首页


        ensureSlash();
        console.log('hash');
    }
    getCurrentLocation(){
        return window.location.hash.slice(1);
    }
    setupHashListener() {
        window.addEventListener('hashchange',()=>{
            this.transitionTo(this.getCurrentLocation())
            console.log('hash变化了');
        })
    }
}