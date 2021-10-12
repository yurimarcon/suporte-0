<template>
    <div>
        <v-row
        class="ma-sm-3"
        >
            <v-col
            cols="12"
            sm="6"
            md="4"
            >
                <CriarUsuario />
            </v-col>
        </v-row>

    </div>
</template>

<script>
import CriarUsuario from "../components/Avancado/CriarUsuario.vue";
export default {
    components:{CriarUsuario}

}
</script>

<style>

</style>