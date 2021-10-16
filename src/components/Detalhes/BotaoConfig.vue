<template>
    <div>
        <v-speed-dial
        v-model="fab"
        absolute
        top
        right
        direction="left"
        >
            <template v-slot:activator>
                <v-btn
                v-model="fab"
                color="blue darken-2"
                dark
                fab
                >
                <v-icon v-if="fab">
                    mdi-close
                </v-icon>
                <v-icon v-else>
                    mdi-cog-outline
                </v-icon>
                </v-btn>
            </template>
            <v-btn
                fab
                dark
                small
                color="indigo"
            >
                <v-icon>mdi-face-agent</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                small
                color="red"
            >
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-speed-dial>
    </div>
</template>

<script>
export default {
    data:()=>{
        return{
            fab: false
        }
    }
}
</script>

<style>

</style>