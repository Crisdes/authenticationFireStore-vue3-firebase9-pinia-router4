import { defineStore } from "pinia"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../firebaseConfig";
import router from "../router";
import { useDatabaseStore } from "./database"

// Con api de opciones
export const useUserStore = defineStore('userStore', {
    state: () => ({
        userData: null,
        loadingUser: false,
        loadingSession: false
    }),
    // Con los actions se pueden modificar los valores de los estados.
    actions: {
        async registerUser(email, password) {
            this.loadingUser = true
            try {
                // Destructuramos ya que sabemos que la respuesta trae user
                const { user } = await createUserWithEmailAndPassword(auth, email, password)
                // console.log(user);
                // asignamos al estado userData con lo cual podemos pintar en cualquier parte de nuestro sitio web
                this.userData = {email: user.email, uid: user.uid}
                // router.push('/')
            } catch (error) {
                console.log(error);
            } finally {
                setTimeout(() => {
                    this.loadingUser = false
                }, 6000);
            }
        },
        async loginUser(email, password) {
            this.loadingUser = true
            try {
                const {user} = await signInWithEmailAndPassword(auth, email, password)
                // Guardamos la informacion en nuestro state
                this.userData = {email: user.email, uid: user.uid}
                router.push('/')
            } catch (error) {
                console.log(error);
            } finally {
                this.loadingUser = false
            }
        },
        async logoutUser () {
            const databaseStore = useDatabaseStore() // en los store la instacia de un store se debe realizar dentro de algun metodo
            try {
                await signOut(auth)
                this.userData = null
                router.push('/login')
                databaseStore.$reset()
            } catch (error) {
                console.log(error);
            }
        },
        currentUser () {
            return new Promise((resolve, reject) => {
                const unsuscribe = onAuthStateChanged (auth, user => {
                    if (user) {
                        this.userData = {email: user.email, uid: user.uid}
                    } else{
                        this.userData = null
                        const databaseStore = useDatabaseStore()
                        databaseStore.$reset()
                    }
                    resolve(user)
                }, e => reject(e))
                unsuscribe();
            })
        }
    }
})