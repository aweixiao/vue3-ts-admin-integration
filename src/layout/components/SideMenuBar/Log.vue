<template>
    <div class="log">
        <svg-icon name="vue" size="large"></svg-icon>
        <span v-if="!isCollapse">xx系统</span>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useIsCollapseStore } from "@/store/modules/app.ts"

const storeSetup = useIsCollapseStore()
const { isCollapse } = storeToRefs(storeSetup)
</script>

<style lang="scss" scoped>

</style>