import { defineStore } from "pinia";
import { ref } from "vue";

// 控制sidebar折叠
export const useIsCollapseStore = defineStore('isCollapseSetup', () => {
    const isCollapse = ref(false)
    function handleCollapse() {
        isCollapse.value = !isCollapse.value
    }
    return { isCollapse, handleCollapse }
})