<template>
  <!-- 当根路由中的children只包含一个路由信息时 -->
  <template
    v-if="hasOneShowingChild(subItem.children, subItem) && (!onlyOneChild.children || onlyOneChild.noShowingChildren)">
    <el-menu-item :index="resolvePath(onlyOneChild.path)">
      <svg-icon :name="onlyOneChild.meta.icon"></svg-icon>
      <template #title>
        <span :title="hasTitle(onlyOneChild.meta.title)">{{ onlyOneChild.meta.title }}</span>
      </template>
    </el-menu-item>
  </template>
  <!-- 当根路由中的children包含多个路由信息时 -->
  <el-sub-menu v-else :index="resolvePath(subItem.path)" teleported>
    <template #title>
      <svg-icon :name="subItem.meta.icon"></svg-icon>
      <span :title="hasTitle(subItem.meta.title)">{{ subItem.meta.title }}</span>
    </template>
    <side-item v-for="child in subItem.children" :key="child.path" :subItem="child"
      :base-path="resolvePath(child.path)" />
  </el-sub-menu>
</template>

<script setup lang="ts">
// import path from 'path-browserify';
import { ref } from 'vue';

let onlyOneChild = ref<any>({})
const props = defineProps({
  subItem: {
    type: Object,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  }
})


function hasOneShowingChild(children: any[] = [], parent: any) {
  if (!children) {
    children = []
  }
  const showingChildren = children.filter((item) => {
    // console.log(item);

    if (item.hidden) {
      return false
    } else {
      onlyOneChild.value = item
      return true
    }
  });

  if (showingChildren.length === 1) {
    return true
  }


  // 没有子路由，只有父路由
  if (showingChildren.length === 0) {
    onlyOneChild = { ...parent, path: '', noShowingChildren: true }
    return true
  }
  return false
}

function resolvePath(routePath: string, routeQuery?: any) {
  if (/^(https?:|mailto:|tel:)/.test(routePath)) {
    return routePath
  }
  if (/^(https?:|mailto:|tel:)/.test(props.basePath)) {
    return props.basePath
  }
  // // 拼接路由地址
  // return path.resolve(props.basePath, routePath)
  if (routeQuery) {
    let query = JSON.parse(routeQuery);
    return { path: getNormalPath(props.basePath + '/' + routePath), query: query };
  }
  return getNormalPath(props.basePath + '/' + routePath);
}
function getNormalPath(p: any) {
  if (p.length === 0 || !p || p === 'undefined') {
    return p;
  }
  const res = p.replace('//', '/');
  if (res[res.length - 1] === '/') {
    return res.slice(0, res.length - 1);
  }
  return res;
}
function hasTitle(title: any) {
  if (title.length > 5) {
    return title;
  } else {
    return '';
  }
}
</script>

<style lang="scss" scoped></style>