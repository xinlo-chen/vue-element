// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router";
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import Vuex from 'vuex'
import store from './store'

Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)


Vue.config.productionTip = false
// 每次路由跳转之前执行


// router.beforeEach((to, from, next) => {
//   let isLogin = sessionStorage.getItem('isLogin');
//   if(isLogin){
//     next()
//   }else{
//     if(to.path === '/login'){
//       next()
//     }else{
//       next({
//         replace:true,
//         name:'Login',
//       })
//     }
//   }
// })


router.beforeEach((to, from, next) => {
  let isLogin = sessionStorage.getItem('isLogin');
  debugger
  //注销
  if (to.path === '/logout') {
    //清空状态
    sessionStorage.clear()
    //跳转登入页面
    next({path: '/login'})
  } else if (to.path === '/login') {
    //判断是否为空，不为空，跳转至首页
    if (isLogin !== null) {
      next({path: '/main'})
    }
  } else if (isLogin === null) {
    next({path: '/login'})
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
