<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import planet from './assets/icon/planet.svg'
import darkMode from './assets/icon/darkmode-8bit.svg'
import avatar from './assets/icon/avatar.svg'
</script>

<template>
  <header>
    <nav>
      <div class="menu-left">
        <RouterLink class="menu" to="/">
          <img :src="planet" alt="planet" class="main-logo" />
          職涯探險隊</RouterLink
        >
        <RouterLink class="menu" to="/mock-interview">AI模擬面試</RouterLink>
        <RouterLink class="menu" to="/interview-questions">面試題庫</RouterLink>
        <RouterLink class="menu" to="/interview-experience">面試經驗</RouterLink>
        <RouterLink class="menu" to="/about">關於我們</RouterLink>
      </div>
      <div class="menu-right">
        <img class="icon" :src="darkMode" alt="" @click="toggleDarkMode" />
        <img class="icon" :src="avatar" alt="" @click="toggleDarkMode" />
      </div>
      <div></div>
    </nav>
  </header>

  <RouterView id="body" />
</template>

<style scoped>
#body {
  padding: 0 2rem;
}
.menu {
  display: flex;
  line-height: 40px;
}
.menu-left {
  margin: 0;
  display: flex;
}
.menu-right {
  margin: 0;
  display: flex;
  margin-left: auto;
}
header {
  position: sticky;
  top: 0;
  background-color: orange;
  padding: 1rem;
}
nav {
  display: flex;
  justify-content: space-around;
}
a {
  margin-right: 2rem;
  font-size: 18px;
}
.icon {
  width: 30px;
  margin-left: 30px;
}
.main-logo {
  padding-right: 10px;
}
</style>
