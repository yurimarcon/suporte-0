<template>
    <div>
        <v-card class="mb-3 pt-4 px-4">
            <v-form
            :disabled="disabled"
            @submit.prevent="handleEnviar()"
            >
                <v-text-field
                v-model="description"
                append-outer-icon="mdi-send"
                :prepend-icon="icon"
                outlined
                clearable
                label="Message"
                type="text"
                @click:append-outer="handleEnviar()"
                ></v-text-field>
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