<template>
  <div>
    <router-link :to="{ name:'student-add' }" class="btn btn-primary mb-3 mt-4">Add</router-link>
    <h1>List</h1>
    <table class="table table-border">
      <thead>
        <tr>
          <th scope="col">STT</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Email</th>
          <th scope="col">Image</th>
          <th scope="col">Thao tac</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in students" :key="item.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.email }}</td>
          <td><img :src="item.image"></td>
          <td>
            <button @click="handleDelete(item.id)" class="btn btn-danger">Delete</button>
            <router-link :to="`/students/edit/${item.id}`" class="btn btn-warning">Edit</router-link>
             <router-link :to="`/students/detail/${item.id}`" class="btn btn-info">Detail</router-link>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import instanceAxios from '../utils/configAxios'

const students = ref([])
const getAllStudents = async () => {
  try {
    const res = await instanceAxios.get(`/students`)
    students.value = res.data
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  getAllStudents()
})

const handleDelete = async (id) => {
  if (window.confirm("Are you sure")) {
    try {
      await instanceAxios.delete(`/students/${id}`)
      students.value = students.value.filter (item => item.id != id)
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style lang="scss" scoped></style>