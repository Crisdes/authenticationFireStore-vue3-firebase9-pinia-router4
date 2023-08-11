import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { defineStore } from 'pinia'
import { db, auth } from '../../firebaseConfig';

// El nombre en el 1re parametro debe ser unico y no debe estar en otros stores 
export const useDatabaseStore = defineStore('database', {
    state: () => ({
        // Función flecha que retorna un array
        documents: []
    }),
    actions: {
        // Cada una una de las acciones que modifican documents
        async getUrls() {
            try {
                // Se debe importar query en base a la libreria lite
                const q = query(collection(db, 'urls'), where("user", "==", auth.currentUser.uid))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach(doc => {
                    console.log(doc.id, doc.data());
                    this.documents.push({
                        id: doc.id,
                        ...doc.data()
                    })    
                })

            } catch (error) {
                console.log(error);
            } finally {
            }
        }
    }
})