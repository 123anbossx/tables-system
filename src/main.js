import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import iView from 'iview';
import axios from 'axios';
import Vueaxios from 'vue-axios';
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false;
Vue.use(iView);
Vue.use(Vueaxios, axios);
router.beforeEach((to, from, next) => {
    let getLoginMsg=JSON.parse(localStorage.getItem('LoginMsg'));
   let currentTime=new Date().getTime();
      if(Boolean(localStorage.getItem("LoginMsg"))){
          if(getLoginMsg.lastTime>currentTime ){
             next()
          }else {
             localStorage.removeItem('LoginMsg');
              next('/')
          }
      }else {
          if(to.path=='/'){
              next()
          }else {
            next('/')
          }



      }



});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
