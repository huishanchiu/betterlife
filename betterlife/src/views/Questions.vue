<script setup lang="ts">
import { ref, onMounted, computed, watchEffect } from 'vue'

const notes = ref([])
const displayNotes = ref([])
const englishNotes = ref([])
const jsNotes = ref([])
const netNotes = ref([])

const bearerToken = import.meta.env.VITE_HACKMD_TOCKEN
const url = '/api/notes'

const fetchAllNotes = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${bearerToken}`
      }
    })
    const data = await response.json()
    // return data.value
    notes.value = data
  } catch (error) {
    // handle error
  }
}

displayNotes.value = notes.value.filter((item) => {
  return item.tags.includes('Js')
})

const filtNote = (tag) => {
  displayNotes.value = notes.value.filter((item, index) => {
    return item.tags.includes(`${tag}`)
  })
}

onMounted(async () => {
  await fetchAllNotes()
  filtNote('Js')
})

const formsLength = computed(() => {
  let count = 0
  console.log('notes.value', notes.value)
  return notes.value.length
})

const jsNotesCount = computed(() => {
  return notes.value.filter((item) => item.tags.includes('Js')).length
})
const leetCodeNotesCount = computed(() => {
  return notes.value.filter((item) => item.tags.includes('leetCode')).length
})
const broswerNotesCount = computed(() => {
  return notes.value.filter((item) => item.tags.includes('瀏覽器')).length
})
const closureNotesCount = computed(() => {
  return notes.value.filter((item) => item.tags.includes('Closure')).length
})
const arrayNotesCount = computed(() => {
  return notes.value.filter((item) => item.tags.includes('Array')).length
})
const cssNotesCount = computed(() => {
  return notes.value.filter((item) => item.tags.includes('css')).length
})
const promiseNotesCount = computed(() => {
  return notes.value.filter((item) => item.tags.includes('Promise')).length
})

if (navigator.mediaDevices) {
  console.log('getUserMedia supported.')
} else {
  console.log('getUserMedia not supported on your browser!')
}
</script>

<template>
  <div class="wrapper">
    <div class="content">
      <div class="categoryWrapper">
        <div class="category" @click="filtNote('Js')">Javascript ({{ jsNotesCount }})</div>
        <div class="category" @click="filtNote('leetCode')">
          LeetCode ({{ leetCodeNotesCount }})
        </div>
        <div class="category" @click="filtNote('瀏覽器')">瀏覽器 ({{ broswerNotesCount }})</div>
        <div class="category" @click="filtNote('Closure')">Closure ({{ closureNotesCount }})</div>
        <div class="category" @click="filtNote('Array')">Array ({{ arrayNotesCount }})</div>
        <div class="category" @click="filtNote('css')">CSS ({{ cssNotesCount }})</div>
        <div class="category" @click="filtNote('Promise')">Promise ({{ promiseNotesCount }})</div>
      </div>
      <div class="title">Javascript</div>
      <div v-for="(item, index) in displayNotes">
        <div class="noteTitle">
          <a class="noteTitleAtag" :href="`interview-questions/${item.shortId}`">
            {{ index + 1 }}. {{ item.title }}</a
          >

          <a :href="`interview-questions/${item.shortId}`" class="seemore">看詳解</a>
        </div>
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
  background-color: beige;
  margin: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
}
.noteTitleAtag:hover {
  color: #ffa500;
}
.seemore {
  color: rgb(133, 133, 133);
  cursor: pointer;
}
.seemore:hover {
  color: #ffa500;
}
</style>
