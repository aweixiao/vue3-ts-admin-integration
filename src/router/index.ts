import {createRouter, createWebHashHistory} from "vue-router"

//定义路由，每个路由都需要映射到一个组件。
const routes = [
    {
        path: '/login',
        name:'login',
        component: () => import("../views/login/index.vue")
    },
    {
        path: '/',
        name:'index',
        component: () => import("../views/index.vue")
    },
    {
        path: '/404',
        name:'404',
        component: () => import("../views/404/index.vue")
    }
    
];

//创建路由实例并传递routes配置
const router = createRouter({
    //内部提供了history模式的实现。为了简单起见，我们在这里使用hash模式。
    history: createWebHashHistory(),
    routes, //'routes: routes' 的缩写
})
export default router;
