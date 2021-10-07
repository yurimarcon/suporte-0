<template>
  <div>
    <v-btn
    @click="gravaDocumento()"
    color="primary"
    block
    >
      Buscar
    </v-btn>
    
    <v-btn
    @click="removerDocumento()"
    color="error"
    block
    >
      Remove
    </v-btn>
    {{retorno}}
  </div>

  

</template>

<script>
import '../services/firebase'
import { getDatabase, onValue, ref, set, remove } from "firebase/database";
const db = getDatabase();

export default {
  data:()=>{
    return{
      retorno: null
    }
  },
  methods:{
    buscaRegistros(){
      onValue(ref(db, 'Usuarios/'), snapshot => {
        console.log(snapshot)
        this.retorno = snapshot.val();
      });
    },
    gravaDocumento(){
      let id = new Date().getTime();
      set(ref(db, 'Usuarios/' + id), {
      // set(ref(db, 'Usuarios/' + 1633609746505), {
        username: "Yuri",
        email: "yuri@email",
        id: id
      });
    },
    removerDocumento(){
      remove(ref(db, 'Usuarios/' + 1633609728356))
    }
  },
  created(){
    this.$store.dispatch('verifyAuth');
    this.buscaRegistros();
  }
}
</script>
