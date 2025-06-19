<template>
    <div>
<h1>Cập nhật</h1>
<form @submit.prevent="handleSubmit()">

                  <div class="mb-3">
                <label for="title" class="form-label">Tên danh mục</label>
                <input type="text" class="form-control" id="title" v-model="category.title" />
            </div>
            <div class="mb-3">
                <label for="count" class="form-label">Số lượng</label>
                <input type="number" class="form-control" id="title" v-model="category.count" />
            </div>
            <div class="mb-3">
                <label class="form-label">Trạng thái</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="isAcitve" id="active" v-model="category.isActive"
                        :value="true" />
                    <label class="form-check-label" for="active"> Kích hoạt </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="isActive" id="notActive"
                        v-model="category.isActive" :value="false" />
                    <label class="form-check-label" for="notActive"> Ẩn </label>
                </div>
                <div class="mb-3">
                    <label for="imageURL" class="form-label">Hình ảnh</label>
                    <input type="text" class="form-control" id="imageURL" v-model="category.imageURL" />
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import instanceAxios from '../utils/configAxios'
import router from '../router/index'
import { useRoute } from 'vue-router'
const route = useRoute();
const id = route.params.id
const category = ref({
    name: '',
    price: null,
    isActive: null,
    imageURL: '',
    category: ''
})

const handleSubmit = async()=>{
    try {
        await instanceAxios.put(`/categories/${id}` , category.value)
        alert ("Complete")
        router.push(`/categories`)
    } catch (error) {
        console.log(error)
    }
}

const getCategotyById = async()=>{
    try {
        const res = await instanceAxios.get(`/categories/${id}`)
        category.value = res.data
    } catch (error) {
        console.log(error)
    }
}

onMounted (()=>{
    getCategotyById()
})
</script>

<style lang="scss" scoped>

</style>