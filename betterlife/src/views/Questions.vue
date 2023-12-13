<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const notes = ref([])
const englishNotes = ref([])
const jsNotes = ref([])
const netNotes = ref([])

const submit = () => {
  console.log('SUBMIT')
}

const bearerToken = import.meta.env.VITE_HACKMD_TOCKEN
const url = '/api/notes'

const fetchAllNotes = async () => {
  const response = await fetch(url, {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${bearerToken}`
    }
  })
  notes.value = await response.json()
}

onMounted(async () => {
  await fetchAllNotes()
  englishNotes.value = notes.value.filter((item) => {
    return item.tags.includes('英文口說')
  })
  jsNotes.value = notes.value.filter((item) => {
    return item.tags.includes('Js')
  })
  netNotes.value = notes.value.filter((item) => {
    return item.tags.includes('瀏覽器')
  })
  console.log('note2', notes.value)
})
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="categoryWrapper">
        <div class="category">Javascript</div>
        <div class="category">LeetCode</div>
        <div class="category">瀏覽器</div>
        <div class="category">Closure</div>
        <div class="category">Array</div>
        <div class="category">CSS</div>

        <div class="category">Promise</div>
      </div>
      <div class="title">Javascript</div>
      <div v-for="(item, index) in jsNotes">
        <div class="noteTitle">{{ index + 1 }}. {{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.content {
  width: 900px;
}
.category {
  border: gray solid 1px;
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
.categoryWrapper {
  display: flex;
}
.title {
  margin: 10px;
  font-size: 18px;
  font-weight: 500;
}
.noteTitle {
  font-size: 15px;
  padding: 10px;
  /* border: grey solid 1px; */
  background-color: beige;

  margin: 5px;
  border-radius: 4px;
}
</style>
