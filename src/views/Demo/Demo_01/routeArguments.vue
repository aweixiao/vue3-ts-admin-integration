<template>
    <div>
        2222
        <ul>
            <li>姓名：{{ query.name }}</li>
            <li>年龄：{{ query.age }}</li>
            <li>性别：{{ query.sex }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const { query } = toRefs(route)

</script>

<style scoped></style>