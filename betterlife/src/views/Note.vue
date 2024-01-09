<script setup lang="ts">
import { ref, onMounted, computed, watchEffect, onUpdated } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import Prism from 'prismjs' // 导入 Prism.js 库
import 'prismjs/themes/prism.css'

const data = ref([])
const htmlContent = ref('')
const note = ref(null)
const route = useRoute()

const bearerToken = import.meta.env.VITE_HACKMD_TOCKEN
const url = `/api/notes/${route.params.id}`

const fetchNote = async () => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${bearerToken}`
      }
    })
    const data = await response.json()
    note.value = data
    htmlContent.value = marked(data.content)
    // htmlContent.value = data.content
  } catch (error) {
    console.error('Error fetching note:', error)
  }
}

onMounted(() => {
  fetchNote()
})

onUpdated(() => {
  Prism.highlightAll()
})

const formattedText = computed(() => {
  const filteredTagHtml = htmlContent.value.replaceAll(
    'language-javascript=',
    'language-javascript'
  )
  return filteredTagHtml
})

console.log('note', note)
</script>

<template>
  <div class="note">
    <div class="noteHeader">
      <h1>{{ note?.title }}</h1>
      <div class="tagsWrapper">
        <div v-for="(tag, index) in note?.tags">
          <p class="tag">{{ tag }}</p>
        </div>
      </div>
    </div>

    <div v-if="note">
      <div :class="customClass" v-html="formattedText"></div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
h1 {
  font-size: 20px;
  color: #5a5a5a;
  font-weight: 900;
  padding: 10px 0;
}
h3 {
  font-size: 18px;
  display: inline-block;
  font-weight: 900;
  margin-top: 15px;
}
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
}
.noteHeader {
  display: flex;
  align-items: center;
}
.tagsWrapper {
  display: flex;
  margin-left: 10px;
}
.tag {
  background-color: #b1b1b1;
  color: #fff;
  margin: 0px 3px;
  padding: 5px 10px;
  line-height: 13px;
  font-size: 13px;
  border-radius: 4px;
  font-weight: 500;
}
hr {
  margin: 30px 0px;
}
</style>
