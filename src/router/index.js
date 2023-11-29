// 导入 vue-router 核心
import { createRouter, createWebHistory } from "vue-router";

// 导出router
export const router = createRouter({
    // 指定历史记录模式:hash模式
    history: createWebHistory(),
    routes: [
        // 配置路由重定向
        {
            path: "/",
            redirect: "/index",
        },
        // 配置路由关系表： path 和 component 的关系
        // 404页面(NotFound.vue)
        {
            name: "not-found",
            path: "/:pathMatch(.*)*",
            component: () => import("@/pages/NotFound.vue"),
        },
        // 后台首页(Index.vue)
        {
            name: "index",
            path: "/index",
            component: () => import("@/pages/Index.vue"),
        },
        // 关于页面(About.vue)
        {
            name: "about",
            path: "/about",
            component: () => import("@/pages/About.vue"),
        },
        {
            name: "login",
            path: "/login",
            component: () => import("@/pages/Login.vue"),
        },
    ],
});
