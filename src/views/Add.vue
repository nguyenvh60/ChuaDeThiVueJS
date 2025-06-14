<template>
    <div>
        <h1>Add</h1>
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
import {ref} from 'vue'
import instanceAxios from '../utils/configAxios'
import router from '../router/index'

const student = ref ({
    name : '',
    age : null ,
    email : '',
    iamge : '',
})

const handleSubmit = async ()=>{
    try {
        await instanceAxios.post(`/students`, student.value)
        router.push('/students')
    } catch (error) {
        console.log(error)
    }
}
</script>

<style lang="scss" scoped></style>