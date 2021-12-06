import Vue from 'vue';
import App from './App.vue'
import router from './router/index'
console.log(router,'12321');
new Vue({
    name:'root',
    el:'#app',
    router,
    render: h=>h(App)
})