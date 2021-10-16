<template>
    <div>
        <v-card  class="pa-5 text--secondary">
            <h1>Timeline de atendimento:</h1>
            <v-divider></v-divider>
            <v-timeline>
                <v-timeline-item
                v-for="n in 3"
                :key="n"
                large
                :right="n%2==0"
                :left="n%2!=0"
                >
                    <template v-slot:icon>
                        <v-avatar
                        color="purple darken-4"
                        ></v-avatar>
                    </template>

                    <v-card class="elevation-2 text--secondary">
                        
                        <h2 class="ml-4">
                            Lorem ipsum
                        </h2>

                        <v-card-text>
                            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.
                        </v-card-text>

                    </v-card>

                </v-timeline-item>
            </v-timeline>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>