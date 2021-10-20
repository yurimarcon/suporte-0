<template>
    <v-card
    class="pa-5 text--secondary"
    >
    <v-form
    @submit.prevent="handleEnviar()"
    >
        <h1>Criar usuário:</h1>
        <v-divider class="mb-3"></v-divider>
        
        <v-text-field
        dense
        label="Nome"
        type="text"
        v-model="user.name"
        ></v-text-field>
        
        <v-text-field
        dense
        label="E-mail"
        type="email"
        v-model="user.email"
        ></v-text-field>
        
        <v-text-field
        dense
        label="Senha"
        type="password"
        counter
        :rules="[rules.min]"
        v-model="user.password"
        ></v-text-field>
        
        <v-text-field
        dense
        label="Cargo"
        type="text"
        v-model="user.office"
        ></v-text-field>

        <v-select
        dense
        :items="['default', 'admin']"
        label="Grupo"
        v-model="user.group"
        ></v-select>
        
        <v-row
        class="d-flex justify-space-around mt-2"
        >
            <v-btn
            color="error darken-1"
            type="reset"
            >Limpar</v-btn>
            
            <v-btn
            :disabled="formIncomplete"
            color="primary"
            type="submit"
            >Gravar</v-btn>
        </v-row>

    </v-form>


    </v-card>
</template>

<script>
export default {
    data:()=>{
        return{
            user:{
                name: null,
                email: null,
                office: null,
                password: null,
                group:'dafault'
            },
            rules: {
                min: v => v && v.length >= 6 || 'No mínimo 6 caracteres'
            },
        }
    },
    methods:{
        handleEnviar(){
            this.$store.dispatch('createUser', this.user);
            this.user = {
                name: null,
                email: null,
                office: null,
                password: null,
                group: 'default'
            }
        },
    },
    computed:{
        formIncomplete(){
            if(!this.user.name || !this.user.email || !this.user.office || !this.user.password){
                return true;
            }
        }
    }
}
</script>

<style>

</style>