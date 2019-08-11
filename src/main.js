import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import iView from 'iview';
import axios from 'axios';
import Vueaxios from 'vue-axios';
import 'iview/dist/styles/iview.css';
import layout from './components/common/layout'
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(Vueaxios, axios);
router.beforeEach((to, from, next) => {
    let getLoginMsg=JSON.parse(localStorage.getItem('LoginMsg'));
   let currentTime=new Date().getTime();
      if(Boolean(localStorage.getItem("LoginMsg"))){
          if(getLoginMsg.lastTime>currentTime ){

             next()
              // console.log(to.path)
          }else {
             localStorage.removeItem('LoginMsg');
              next('/')
          }
      }else {
          if(to.path=='/'){
              console.log(to.path)
              next()
          }else {
            next('/')
          }



      }



});
Vue.component('layout',layout);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
