<template>
    <div>
        <h1>Home</h1>
        <div>{{ userStore.userData?.email }}</div>
    </div>
</template>

<script setup>
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../../firebaseConfig";

// onAuthStateChanged(auth, (user) => {
// console.log(user);
// })

import {useUserStore} from '../stores/user'
const userStore = useUserStore()
</script>
