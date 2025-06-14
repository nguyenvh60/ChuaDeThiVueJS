<template>
    <div>
        <h1>Edit</h1>
        <form @submit.prevent="handleSubmit()">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" v-model="student.name">
            </div>
            <div class="form-group">
                <label for="age">Age</label>
                <input type="number" class="form-control" id="age" name="age" v-model="student.age">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" name="email" v-model="student.email">
            </div>
            <div class="form-group">
                <label for="image">Image</label>
                <input type="text" class="form-control" id="image" name="image" v-model="student.image">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
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

const handleSubmit = async () => {
    try {
        await instanceAxios.put(`/students/${id}`, student.value)
        alert("Update Complete")
        router.push('/students')
    } catch (error) {
        console.log(error)
    }
}

const getStudentById = async () => {
    try {
        const res = await instanceAxios.get(`/students/${id}`)
        student.value = res.data
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getStudentById();
})




</script>

<style lang="scss" scoped></style>