<template>
    <div>
        <v-card class="my-3 pa-5">
            <v-form
            :disabled="disabled"
            @submit.prevent="handleEnviar()"
            >
                <v-textarea
                outlined
                v-model="description"
                name="Mensagem"
                label="Mensagem"
                ></v-textarea>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    :disabled="disabled"
                    color="primary"
                    type="submit"
                    >
                        enviar 
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-form>
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
            disabled:false,
            description: null
        }
    },
    methods:{
        handleEnviar(){
            let id = new Date().getTime()
            let message = {
                id_chat     : id,
                description : this.description,
                from        : "user",
                to          : "suport",
                // id_ticket   : this.$route.params.id_ticket,
                id_ticket   : id,
                date        : new Date().toLocaleString()
            }

            const colection = ref(db, 'Chats/' + id );
            set(colection, message);

            this.description = null;
        }
    }
}
</script>

<style>

</style>