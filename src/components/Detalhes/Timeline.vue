<template>
    <div>
        <v-card  class="pa-5 text--secondary">
            <h1>Timeline de atendimento:</h1>
            <v-divider></v-divider>
            <v-timeline>
                <v-timeline-item
                v-for="message in messages"
                :key="message.id_chat"
                large
                :right="message.from !== 'user'"
                :left="message.from == 'user'"
                >
                    <template v-slot:icon>
                        <v-avatar
                        color="purple darken-4"
                        ></v-avatar>
                    </template>

                    <v-card class="elevation-2 text--secondary">
                        
                        <!-- <h2 class="ml-4">
                            Lorem ipsum
                        </h2> -->

                        <v-card-text>
                            {{ message.description }}
                            
                            
                        </v-card-text>
                        <v-card-actions>
                            <v-icon
                            v-if="!love"
                            @mouseenter="color = 'red'"
                            @mouseleave="color = null"
                            :color="color"
                            @click="love = !love"
                            >mdi-cards-heart-outline</v-icon>
                            <v-icon
                            v-else
                            @mouseenter="color = 'red'"
                            @mouseleave="color = null"
                            @click="love = !love"
                            color="red"
                            >mdi-cards-heart</v-icon>

                            <v-spacer></v-spacer>
                            <small>{{message.date}}</small>
                        </v-card-actions>

                    </v-card>

                </v-timeline-item>
            </v-timeline>
        </v-card>
    </div>
</template>

<script>
import { getDatabase, onValue, ref } from '@firebase/database'
import '../../services/firebase'
const db = getDatabase();

export default {
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