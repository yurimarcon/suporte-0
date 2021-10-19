<template>
    <div>
        <v-card
        class="pa-3 text--secondary"
        color="warning lighten-3"
        height="600"
        >
          <h1>Anotações</h1>
          <v-divider></v-divider>
          <v-textarea
          rows="18"
          v-model="anotacao"
          ></v-textarea>
        </v-card>
    </div>
</template>

<script>
import { getDatabase, set, ref } from 'firebase/database'
import '../../services/firebase'
const db = getDatabase()

export default {
    data:()=>{
        return{
            anotacao: null
        }
    },
    methods:{
        salvar(){
            let anotacao = { 
                id_anotacao: new Date(),
                anotacao: this.anotacao
            }
            const colection = ref(db, 'Anotacao/' + anotacao.id_anotacao );
            set(colection, anotacao);
        }
    },
    mounted(){
        
        
    }
}
</script>

<style>

</style>