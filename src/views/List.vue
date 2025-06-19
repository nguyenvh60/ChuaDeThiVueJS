<template>
  <div>
    <h1>Danh Sách Danh Mục</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Title</th>
          <th scope="col">Count</th>
          <th scope="col">isActive</th>
          <th scope="col">Image</th>
          <th scope="col">Thao tác</th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="(item, index) in categories" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.title }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.isActive }}</td>
          <td><img :src="item.imageURL"></td>
          <td>
            <button @click="handleDelete(item.id)"class="btn btn-danger">Xóa</button>
            <router-link :to="`/categories/detail/${item.id}`" class="btn btn-info">Detail</router-link>
             <router-link :to="`/categories/edit/${item.id}`" class="btn btn-warning">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import instanceAxios from '../utils/configAxios'

const categories = ref([])
const getAllCategory = async () => {
  try {
    const res = await instanceAxios.get(`/categories`)
    categories.value = res.data
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getAllCategory()
})

const handleDelete =async(id)=>{
  try {
    await instanceAxios.delete(`/categories/${id}`)
    categories.value = categories.value.filter(item => item.id !=id)
  } catch (error) {
    console.log(error)
  }
}
</script>

<style lang="scss" scoped></style>