<template>
  <div>
    <h1>APP</h1>
    <nav v-if="!userStore.loadingSession">
      <router-link to="/" v-if="userStore.userData">Home</router-link> |
      <router-link to="/login" v-if="!userStore.userData">Login</router-link> |
      <router-link to="/register" v-if="!userStore.userData">Register</router-link> |
      <button @click="userStore.logoutUser" v-if="userStore.userData">Logout</button>
    </nav>
    <div v-else>
      loading user...
    </div>
    <!-- En router-view es donde se renderiza route por lo que muestra el contenido de cada una de las rutas -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useUserStore } from "./stores/user";
const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
