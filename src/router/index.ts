import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';
import Register from '@/views/Register.vue';
import Login from '@/views/Login.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {//注册页面
    path: '/register',
    name: 'Register',
    component: Register
  },
  {//登录
    path: '/login',
    name: 'Login',
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
