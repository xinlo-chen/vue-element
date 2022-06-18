import Vue from "vue";
import Router from "vue-router";
import Login from "../views/Login";
import Main from "../views/Main";
import MemberLevel from "../views/Member/MemberLevel";
import MemberList from "../views/Member/MemberList";
import NotFound from "../views/NotFound";

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      //登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      //首页
      path: '/main/',
      name: 'Main',
      component: Main,
      children: [
        { //会员列表
          path: '/member/list',
          name: 'MemberList',
          component: MemberList,
        },
        { //会员等级
          path: '/member/level/:id',
          name: 'MemberLevel',
          component: MemberLevel,
          props:true
        },
      ]
    },
    {
      path:'/goMain',
      redirect:'/main'
    },
    {
      path:'*',
      component: NotFound
    }


  ]
})
