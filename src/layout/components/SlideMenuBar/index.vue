import { ref, reactive } from 'vue';
<template>
    <div>
        <el-menu router :default-active="activeMenu" active-text-color="#409EFF" class="el-menu-vertical-demo"
            @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            2222
            <span v-for="item in routes" :key="item.path">{{ item.path }}</span>
            <menu-item v-for="item in routes" :key="item.path" :route="item" :base-path="item.path" />
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import MenuItem from '@/layout/components/SlideMenuBar/item.vue'

const isCollapse = ref(false)

const router = useRouter()
const route = useRoute()
const routes = computed(() => {
    return router.options.routes
})
const activeMenu = computed(() => {
    const { path } = route
    return path
})

onMounted(() => {
    console.log(routes.value);
    console.log(activeMenu.value);

});

function handleOpen(key: string, keyPath: string[]) {
    console.log(key, keyPath);
}
function handleClose(key: string, keyPath: string[]) {
    console.log(key, keyPath);
}
</script>

<style scoped></style>