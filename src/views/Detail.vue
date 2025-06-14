<template>
    <div>
        <h1>Tên : {{ student.name }}</h1>
        <h1>Tuổi : {{ student.age }}</h1>
        <h1>Email : {{ student.email }}</h1>
        <h1>Ảnh : <img :src="student.image"></h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import instanceAxios from '../utils/configAxios'
import router from '../router/index'
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;
const student = ref({
    name: '',
    age: null,
    email: '',
    image: '',
})
const getStudentByIdDetail = async () => {
    try {
        const res = await instanceAxios.get(`/students/${id}`)
        student.value = res.data
    } catch (error) {
        console.log(error)
    }
}

onMounted (()=>{
    getStudentByIdDetail();
})
</script>

<style lang="scss" scoped></style>