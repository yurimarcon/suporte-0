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
    :loading="loading"
    :headers="headers"
    :items="desserts"
    :search="search"
    >
        <template v-slot:item.creationDate="{ item }">
            {{ item.creationDate | date(item.creationDate) }}
        </template>

        <template v-slot:item.edit="{ item }">
          <DialogEdit 
          :user="item"
          />
        </template>
    </v-data-table>
  </v-card>
</template>

<script>
import '../../services/firebase'
import { getDatabase, ref, onValue} from "firebase/database";
import DialogEdit from './dialog/DialogEdit.vue';
const db = getDatabase();

export default {
  components:{DialogEdit},
    data () {
      return {
        loading: true,
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
          { text: 'Data de cadastro', value: 'creationDate' },
          { text: 'Grupo', value: 'group' },
          { text: 'Editar', value: 'edit' }
        ],
        desserts: [],
      }
    },
    mounted(){
        const Usuarios = ref(db, 'Usuarios' );
        onValue(Usuarios, (snapshot) => {
          const data = snapshot.val();
          this.desserts = Object.values(data)
          this.$emit('countUsers',this.desserts.length)
        });

        setTimeout(()=>{
          this.loading = false;
        }, 2000)
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