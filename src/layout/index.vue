<script setup lang="ts">
import SlideMenuBar from '@/layout/components/SlideMenuBar/index.vue'
</script>
<template>
    <div>
        <!-- 侧边菜单栏 -->
        <SlideMenuBar />
        <!-- 内容区域 -->
        <router-view />
    </div>
</template>


<style scoped></style>