<template>
    <div>
        demo_01

        <ul v-for="(item, index) in peoples" :key="index">
            <li @click="handleDetail(item)">{{ item.name }}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue';
import { useRouter } from 'vue-router';
defineOptions({
    name: 'Demo_01',
})
const router = useRouter()

interface people {
    name: string,
    age: number,
    sex: string
}
const peoples: Array<people> = reactive([
    { name: '张三', age: 18, sex: '男' },
    { name: '李四', age: 35, sex: '男' },
    { name: '王五', age: 24, sex: '女' }
])

function handleDetail(item: any) {
    router.push({
        path:'/Demo/Demo_01/routeArguments',
        // name:'routeArguments',
        query: {
            name: item.name,
            age: item.age,
            sex: item.sex
        },
    })
}

</script>

<style scoped></style>