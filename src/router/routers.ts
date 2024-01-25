import Layout from '@/layout/index.vue'
//定义路由，每个路由都需要映射到一个组件。
const routes = [
    // {
    //     path: '/login',
    //     name:'login',
    //     component: () => import("../views/login/index.vue")
    // },
    {
        path: "",
        component: Layout,
        children: [
            {
                path: "/index",
                name: "Index",
                meta: {
                    title: "首页",
                    icon: "home-page",
                },
                component: () => import("@/views/index.vue"),
            },
        ],
    },
    {
        path: "",
        component: Layout,
        children: [
            {
                path: "/todos",
                name: "Todos",
                meta: {
                    title: "Todos",
                    icon: "home-page",
                },
                component: () => import("@/views/Todos/index.vue"),
            },
        ],
    },
    {
        path: "/Demo",
        name: "Demo",
        meta: {
            title: "Demo",
            icon: "home-page",
        },
        component: Layout,
        children: [
            {
                path: "Demo_01",
                name: "Demo_01",
                meta: {
                    title: "Demo_01",
                    icon: "home-page",
                },
                component: () => import("@/views/Demo/Demo_01/index.vue"),
                children: [
                    {
                        path: "routeArguments",
                        name: "routeArguments",
                        hidden: true,
                        component: () => import("@/views/Demo/Demo_01/routeArguments.vue")
                    },
                ]
            },
            {
                path: "Demo_02",
                name: "Demo_02",
                meta: {
                    title: "Demo_02",
                    icon: "home-page",
                },
                component: () => import("@/views/Demo/Demo_02/index.vue"),
            },
        ]
    },
    // {
    //     path: "/Demo",
    //     name: "Demo",
    //     meta: {
    //         title: "Demo",
    //         icon: "home-page",
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "Demo_01",
    //             name: "Demo_01",
    //             meta: {
    //                 title: "Demo_01",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_01/index.vue"),
    //         },
    //         {
    //             path: "Demo_02",
    //             name: "Demo_02",
    //             meta: {
    //                 title: "Demo_02",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_02/index.vue"),
    //         },
    //     ]
    // },
    // {
    //     path: "/Demo",
    //     name: "Demo",
    //     meta: {
    //         title: "Demo",
    //         icon: "home-page",
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "Demo_01",
    //             name: "Demo_01",
    //             meta: {
    //                 title: "Demo_01",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_01/index.vue"),
    //         },
    //         {
    //             path: "Demo_02",
    //             name: "Demo_02",
    //             meta: {
    //                 title: "Demo_02",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_02/index.vue"),
    //         },
    //     ]
    // },
    // {
    //     path: "/Demo",
    //     name: "Demo",
    //     meta: {
    //         title: "Demo",
    //         icon: "home-page",
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "Demo_01",
    //             name: "Demo_01",
    //             meta: {
    //                 title: "Demo_01",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_01/index.vue"),
    //         },
    //         {
    //             path: "Demo_02",
    //             name: "Demo_02",
    //             meta: {
    //                 title: "Demo_02",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_02/index.vue"),
    //         },
    //     ]
    // },
    // {
    //     path: "/Demo",
    //     name: "Demo",
    //     meta: {
    //         title: "Demo",
    //         icon: "home-page",
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "Demo_01",
    //             name: "Demo_01",
    //             meta: {
    //                 title: "Demo_01",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_01/index.vue"),
    //         },
    //         {
    //             path: "Demo_02",
    //             name: "Demo_02",
    //             meta: {
    //                 title: "Demo_02",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_02/index.vue"),
    //         },
    //     ]
    // },
    // {
    //     path: "/Demo",
    //     name: "Demo",
    //     meta: {
    //         title: "Demo",
    //         icon: "home-page",
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "Demo_01",
    //             name: "Demo_01",
    //             meta: {
    //                 title: "Demo_01",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_01/index.vue"),
    //         },
    //         {
    //             path: "Demo_02",
    //             name: "Demo_02",
    //             meta: {
    //                 title: "Demo_02",
    //                 icon: "home-page",
    //             },
    //             component: () => import("@/views/Demo/Demo_02/index.vue"),
    //         },
    //     ]
    // },
    // {
    //     path: '/404',
    //     name:'404',
    //     component: () => import("../views/404/index.vue")
    // }

];
export default routes;