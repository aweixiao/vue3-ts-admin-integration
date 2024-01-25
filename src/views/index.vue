<script setup lang="ts">
import Drawer from '@/components/Drawer.vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
import Test from "@/views/test.vue";
import {ref} from "vue";

const isShow = ref(true)

</script>
<template>
  <div style="width: 100%">
    <Drawer/>
    <Test v-if="isShow"></Test>
    <SvgIcon name="phone" size="large" color="success"></SvgIcon>
  </div>
</template>