<script setup lang="ts">
import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from "vue";
import useImg from "@/hooks/useImg.ts";
import axios from "axios";

const {imgList, GetImg} = useImg()

onBeforeMount(() => {
  // console.log('挂载前')
});

onMounted(() => {
  // console.log('挂载完毕')
  // GetImg()
  // console.log(imgList)
  //
  // axios.get('https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata' )
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
})

onBeforeUpdate(() => {
  console.log('更新前')
})

onUpdated(() => {
  console.log('更新后')
})

onBeforeUnmount(() => {
  console.log('卸载前')
})

onUnmounted(() => {
  console.log('卸载完毕')
})


</script>

<template>
  <div>
    测试
    <img v-for="(item,index) in imgList" :key="index" :src="item.image_src">
  </div>
</template>

<style lang="scss" scoped>
img{
  width: 200px;
}
</style>