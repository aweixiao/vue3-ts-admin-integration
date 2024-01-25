<template>
    <div class="nav_bar">
        <div class="fold" @click="handleCollapse()">
            <el-icon size="24">
                <Expand v-if="isCollapse === true" />
                <Fold v-else />
            </el-icon>
        </div>
        导航栏
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useIsCollapseStore } from "@/store/modules/app.ts"

const storeSetup = useIsCollapseStore()
const { isCollapse } = storeToRefs(storeSetup)

function handleCollapse(){
    storeSetup.handleCollapse()
}

</script>

<style scoped lang="scss">
.nav_bar {
    width: 100%;
    height: 50px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 2px 1px 4px rgba(218, 218, 218, 0.5);;

    .fold {
        width: 50px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.3s;
    }

    .fold:hover {
        background-color: #fdfdfd;
        box-shadow: 1px 1px 6px rgba(226, 226, 226, 0.9);
    }
}
</style>