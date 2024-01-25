<script setup lang="ts">
import {computed} from "vue";

defineOptions({
  name: "SvgIcon"
})

export type IconSize = "default" | "small" | "large"

export type IconColor =
    | "primary"
    | "default"
    | "success"
    | "warn"
    | "error"
    | (string & {})

const props = withDefaults(
    defineProps<{
      prefix?: string;
      name: string,
      size?: IconSize | number,
      color?: IconColor,
    }>(),
    {
      prefix: "#icon-",
      size: "default",
      color: ""
    }
)
// 大小默认值
const sizeMap: Record<IconSize, number> = {
  default: 16,
  small: 12,
  large: 24
};
// 颜色默认值
const colorMap: Record<IconColor, string> = {
  primary: "#409EFF",
  success: "#67C23A",
  error: "#bb1b1b",
  warn: "#F56C6C",
  default: "#333333",
};

const colorRef = computed(() => {
  return colorMap[props.color] || props.color
})
const sizeRef = computed(() => {
  if (typeof props.size === "string") {
    return sizeMap[props.size]
  }
  return props.size
})
</script>

<template>
  <svg class="svg-icon" :style="{
      width:sizeRef+'px',
      height:sizeRef+'px',
    }">
    <use :href="prefix + name" :fill="colorRef"/>
  </svg>
</template>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>