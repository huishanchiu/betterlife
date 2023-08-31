<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'

const submit = () => {
  console.log('SUBMIT')
}
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
