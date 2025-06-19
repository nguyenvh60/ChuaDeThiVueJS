<template>
    <div>
<h1>CHI TIẾT</h1>
<h2>Tên : {{ category.title }}</h2>
<h2>Số lượng : {{ category.count }}</h2>
<h2>Trạng thái : {{ category.isActive }}</h2>
<h2>Ảnh : <img :src="category.imageURL" width="90"></h2>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import instanceAxios from '../utils/configAxios'
import {useRoute} from 'vue-router'
const route = useRoute()
const id = route.params.id

const category = ref({
    title: '',
    count: null,
    isActive: null,
    imageURL: null,
})
const getAllCategoryById = async()=>{
    try {
        const res = await instanceAxios.get(`/categories/${id}`)
        category.value = res.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(()=>{
    getAllCategoryById()
})

</script>

<style lang="scss" scoped></style>