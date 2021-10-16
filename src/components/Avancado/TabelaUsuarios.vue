<template>
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
      :headers="headers"
      :items="desserts"
      :search="search"
    >
        <template v-slot:item.creationDate="{ item }">
            {{ item.creationDate | date(item.creationDate) }}
        </template>
    </v-data-table>
  </v-card>
</template>

<script>
import '../../services/firebase'
import { getDatabase, ref, onValue} from "firebase/database";
const db = getDatabase();

export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Nome',
            align: 'start',
            filterable: true,
            value: 'name',
          },
          { text: 'E-mail', value: 'email' },
          { text: 'Cargo', value: 'office' },
          { text: 'Data de cadastro', value: 'creationDate' }
        ],
        desserts: [
          {
            name: 'Yuri',
            email: 'yuri.erik.oliveira@gmail.com',
            office: 'Programador',
            creationDate: new Date()
          }
        ],
      }
    },
    mounted(){
        const Usuarios = ref(db, 'Usuarios/');
        onValue(Usuarios, (snapshot) => {
        const data = snapshot.val();
        this.desserts = Object.values(data)
        
        // updateStarCount(postElement, data);
        });
    },
    filters:{
        date(dataMilisegundos){
        return new Date(dataMilisegundos).toLocaleDateString();
        }
    }
  }
</script>

<style>

</style>