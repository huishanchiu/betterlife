<script setup lang="ts">
import { ref, onMounted, computed, watchEffect, onUpdated } from 'vue'
import TheWelcome from '../components/TheWelcome.vue'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import db from '../utils/firebase.ts'

//
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCkypBRI7sPFWBYE0g4xNPbz0I6RZVKg1E',
  authDomain: 'betterlife-bc973.firebaseapp.com',
  projectId: 'betterlife-bc973',
  storageBucket: 'betterlife-bc973.appspot.com',
  messagingSenderId: '18446899821',
  appId: '1:18446899821:web:28080bb85fd492795cfd64',
  measurementId: 'G-WNHNJ6H3BB'
}

onMounted(async () => {
  const docRef = doc(db, 'topics', 'sports')
  const docSnap = await getDoc(docRef)

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data())
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!')
  }
})
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="wrapper">
      <div class="leftWrapper">
        <div class="title">面試官</div>
        <div class="content">
          <div class="row">職稱： <input type="text" /></div>
          <div class="row">性格： <input type="text" /></div>
          <div class="row">公司： <input type="text" /></div>
          <div class="row">JD： <textarea cols="30" rows="10"></textarea></div>
        </div>
      </div>
      <div class="righttWrapper">
        <div class="title">面試者</div>
        <div class="content">
          <div class="row">現職： <input type="text" /></div>
          <div class="row">年紀： <input type="text" /></div>
          <div class="row">背景： <input type="text" /></div>
          <div class="row">應徵職位： <input type="text" /></div>
        </div>
      </div>
    </div>
    <button @click="submit">submit</button>
  </main>
</template>

<style scoped>
.wrapper {
  display: flex;
}
.leftWrapper {
  box-sizing: border-box;
  border-radius: 4px;
  border: lightgrey 1px solid;
  margin: 5px;
  width: 50%;
}
.righttWrapper {
  box-sizing: border-box;
  border-radius: 4px;
  border: lightgrey 1px solid;
  margin: 5px;
  width: 50%;
}
.title {
  background-color: lightgrey;
  text-align: center;
}
.row {
  margin-top: 10px;
}
.content {
  padding: 10px;
  box-sizing: border-box;
  height: 400px;
}
</style>
../utils/firebase.ts
