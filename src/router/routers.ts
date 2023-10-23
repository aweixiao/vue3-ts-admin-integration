import Layout from '@/layout/index.vue'
//定义路由，每个路由都需要映射到一个组件。
const routes = [
    // {
    //     path: '/login',
    //     name:'login',
    //     component: () => import("../views/login/index.vue")
    // },
    {
        path: "/",
        redirect: "/index",
        component: Layout,
        children: [
            {
                path: "index",
                name: "Index",
                meta: {
                    title: "首页",
                    icon: "el-icon-s-home",
                },
                component: () => import("@/views/index.vue"),
            },
        ],
    },
    {
        path: "/todos",
        component: Layout,
        children: [
            {
                path: "index",
                name: "Todos",
                meta: {
                    title: "Todos",
                    icon: "el-icon-s-home",
                },
                component: () => import("@/views/Todos/index.vue"),
            },
        ],
    },
    // {
    //     path: '/404',
    //     name:'404',
    //     component: () => import("../views/404/index.vue")
    // }

];
export default routes;