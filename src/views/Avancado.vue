<template>
    <div class="ma-sm-3">
        <v-alert
        color="primary"
        dark
        icon="mdi-face-agent"
        border="left"
        >
        Nessa tela você pode gerenciar os usuários do sistema, em caso de dúvidas, entre em contato com o desenvolvedor da plataforma.
        </v-alert>
        <v-row>
            <v-col
            cols="12"
            md="4"
            >
                <TotalDeUsuarios 
                :count="count"
                />
                <CriarUsuario />
            </v-col>
            
            <v-col
            cols="12"
            md="8"
            >
                <TabelaUsuarios 
                @countUsers="countUsers"
                />
            </v-col>
        </v-row>

    </div>
</template>

<script>
import CriarUsuario from "../components/Avancado/CriarUsuario.vue";
import TabelaUsuarios from "../components/Avancado/TabelaUsuarios.vue";
import TotalDeUsuarios from "../components/Avancado/TotalDeUsuarios.vue";
export default {
    components:{CriarUsuario, TabelaUsuarios, TotalDeUsuarios},
    data(){
        return{
            count : 0
        }
    },
    methods:{
        countUsers(count){
            this.count = count ;
        }
    }
}
</script>

<style>

</style>