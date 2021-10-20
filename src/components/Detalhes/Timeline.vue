<template>
    <div>
        <v-card  class="pa-5 text--secondary">
            <h1>Timeline de atendimento:</h1>
            <v-divider></v-divider>
            <v-virtual-scroll
            :items="[0]"
            bench="350"
            height="350"
            item-height="350"
            >
                <template v-slot:default="{ item }">
                    <v-timeline>
                        <ItemTimeline
                        v-for="message in messages"
                        :key="message.id_chat"
                        :message="message"
                        />
                    </v-timeline>
                </template>
            </v-virtual-scroll>
        </v-card>
    </div>
</template>

<script>
import { getDatabase, onValue, ref } from '@firebase/database'
import '../../services/firebase'
import ItemTimeline from './ItemTimeline.vue';
const db = getDatabase();

export default {
    components:{ItemTimeline},
    data:()=>{
        return{
            color: null,
            love : false,
            messages:[]
        }
    },
    mounted(){
        onValue(ref(db, 'Chats/'), snapshot => {
            this.messages = Object.values(snapshot.val()).reverse()
            console.log(Object.values(snapshot.val()))
        });
    }
}
</script>

<style>

</style>