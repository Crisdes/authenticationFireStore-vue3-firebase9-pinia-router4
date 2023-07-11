<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="handleSubmit">
      <!-- con trim validamos que no se ingresen espacios vacios -->
      <input
        type="email"
        name=""
        id=""
        placeholder="Ingrese Email"
        v-model.trim="email"
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="Ingrese Contraseña"
        v-model.trim="password"
      />
      <button type="submit" :disabled="userStore.loadingUser">Crear Usuario</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user";
// import {useRouter} from "vue-router"

const email = ref("");
const password = ref("");
const userStore = useUserStore();
// const router = useRouter();

const handleSubmit = async () => {
  if (!email.value || password.value.length < 6) {
    return alert("llena los datos");
  }
  await userStore.registerUser(email.value, password.value)
  // router.push('/')

//   console.log(email.value);
//   console.log(password.value);
//   console.log("procesando formulario");
};
</script>
