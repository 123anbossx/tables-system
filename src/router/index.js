import Vue from 'vue'
import Router from 'vue-router'
import test from './first'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: resolve => require(['../components/login.vue'], resolve),
            meta:{
                login:true,
            }
        },
        test


    ]
})