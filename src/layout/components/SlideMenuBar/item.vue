<template>
    <div>
        <!-- 当根路由中的children只包含一个路由信息时 -->
        <template
            v-if="hasOneShowingChild(route.children, route) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
            <el-menu-item :index="resolvePath(onlyOneChild.path)">
                <i v-if="onlyOneChild.meta && onlyOneChild.meta.icon" :class="onlyOneChild.meta.icon"></i>
                <span>{{ onlyOneChild.meta.title }}</span>
            </el-menu-item>
        </template>
        <!-- 当根路由中的children包含多个路由信息时 -->
        <!-- <el-submenu v-else :index="resolvePath(route.path)">
            <template slot="title">
                <i v-if="route.meta && route.meta.icon" :class="route.meta.icon"></i>
                <span>{{ route.meta.title }}</span>
            </template>
            <template>
                <menu-item v-for="item in route.children" :key="item.path" :route="item"
                    :base-path="resolvePath(item.path)" />
            </template>

        </el-submenu> -->
    </div>
</template>

<script setup lang="ts">
import path from 'path-browserify';
import { ref } from 'vue';

let onlyOneChild = ref(null)
const props = defineProps({
    route: {
        type: Object,
        required: true
    },
    basePath: {
        type: String,
        default: ''
    }
})
console.log(props.route);


function hasOneShowingChild(children = [], parent: object) {
    const showingChildren = children.filter((item) => {
        console.log(item);

        // if (item.hidden) {
        //     return false
        // } else {
        onlyOneChild = item
        return true
        // }
    });

    if (showingChildren.length === 1) {
        return true
    }

    // 没有子路由，只有父路由
    if (showingChildren.length === 0) {
        console.log(parent);
        
        onlyOneChild = { ...parent, path: '', noShowingChildren: true }
        console.log(parent);
        
        return true
    }
    return false
}
function resolvePath(routePath: string) {
    if (/^(https?:|mailto:|tel:)/.test(routePath)) {
        return routePath
    }
    if (/^(https?:|mailto:|tel:)/.test(props.basePath)) {
        return props.basePath
    }
    // 拼接路由地址
    return path.resolve(props.basePath, routePath)
}
</script>

<style scoped></style>