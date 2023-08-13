<template>
  <div>
    <h1>Home</h1>
    <div>{{ userStore.userData?.email }}</div>
    <p v-if="databaseStore.loadingDocs">Loading Docs...</p>
    <ul v-else>
      <li v-for="item of databaseStore.documents" :key="item.id">
        {{ item.id }}
        <br>
        {{ item.name }}
        <br>
        {{ item.short }}
      </li>
    </ul>
  </div>
</template>

<script setup>
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebaseConfig";

// onAuthStateChanged(auth, (user) => {
// console.log(user);
// })

import { useUserStore } from "../stores/user";
import { useDatabaseStore } from "../stores/database";

const userStore = useUserStore();
const databaseStore = useDatabaseStore();

databaseStore.getUrls()
</script>
