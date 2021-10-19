<template>
    <div>
        <v-timeline-item
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

                <v-card-text>
                    {{ message.description }}
                    
                    
                </v-card-text>
                <v-card-actions>
                    <v-icon
                    v-if="!message.like"
                    @mouseenter="color = 'red'"
                    @mouseleave="color = null"
                    :color="color"
                    @click="like()"
                    >mdi-cards-heart-outline</v-icon>
                    <v-icon
                    v-else
                    class="animate__animated animate__tada"
                    @mouseenter="color = 'red'"
                    @mouseleave="color = null"
                    @click="like()"
                    color="red"
                    >mdi-cards-heart</v-icon>

                    <v-spacer></v-spacer>
                    <small>{{message.date}}</small>
                </v-card-actions>

            </v-card>

        </v-timeline-item>
    </div>
</template>

<script>
import { getDatabase, set, ref } from 'firebase/database'
import '../../services/firebase'
const db = getDatabase()

export default {
    props:['message'],
    data:()=>{
        return{
            color: null,
            love : false
        }
    },methods:{
        like(){
            
            this.message.like = !this.message.like;

            const colection = ref(db, 'Chats/' + this.message.id_chat );
            set(colection, this.message);
        }
    }
}
</script>

<style>

</style>