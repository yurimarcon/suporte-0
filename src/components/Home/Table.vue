<template>
  <div>
      <v-card>
        <v-card-title>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
        :loading="loading"
        :headers="headers"
        :items="desserts"
        :search="search"
        >
          
          <template v-slot:item.id="{ item }">
            {{ item.creationDate | date(item.creationDate) }}
          </template>
          
          <template v-slot:item.view="{ item }">
            <v-btn
            :to="{name:'DetalhesTicket', params:item}"
            color="primary"
            rounded
            >
              <v-icon>mdi-arrow-right-bold-circle-outline</v-icon>
            </v-btn>
          </template>

        </v-data-table>
      </v-card>
  </div>
</template>

<script>
import '../../services/firebase'
import { getDatabase, onValue, ref, set, remove } from "firebase/database";
const db = getDatabase();

export default {
  data:()=>{
    return{
        loading: true,
        retorno: null,
        search: '',
        headers: [
          {
            text: 'Título',
            filterable: true,
            value: 'title',
          },
          { text: 'Prioridade', value: 'priority'},
          { text: 'Data da Criação', value: 'id'},
          { text: 'Visualizar', value: 'view'},
        ],
        desserts: []
    }
  },
  methods:{
    buscaRegistros(){
      onValue(ref(db, 'Tickets/'), snapshot => {
        this.desserts = Object.values(snapshot.val())
        console.log(this.desserts)
        this.loading = false
      });
    },
    removerDocumento(){
      remove(ref(db, 'Usuarios/' + 1633609728356))
    }
  },
  created(){
    this.$store.dispatch('verifyAuth');
    this.buscaRegistros();
  },
  filters:{
    date(dataMilisegundos){
      return new Date(dataMilisegundos).toLocaleDateString();
    }
  }
}
</script>
