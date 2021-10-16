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
        :rules="[rules.required, rules.min]"
        v-model="user.password"
        :error="passwordError"
        ></v-text-field>
        
        <v-text-field
        dense
        label="Confirme a senha"
        type="password"
        counter
        :rules="[rules.required, rules.min]"
        v-model="user.password2"
        :error="passwordError"
        ></v-text-field>
        
        <v-text-field
        dense
        label="Cargo"
        type="text"
        v-model="user.office"
        ></v-text-field>
        
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
            >Criar</v-btn>
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
                password2: null,
            },
            rules: {
                required: value => !!value || 'Obrigatório.',
                min: v => v && v.length >= 6 || 'No mínimo 6 caracteres'
            },
        }
    },
    methods:{
        handleEnviar(){
            if(this.user.password != this.user.password2){
                return;
            }
            if(!this.user.name || !this.user.email || !this.user.office || !this.user.password || !this.user.password2){
                return;
            }
            this.$store.dispatch('createUser', this.user);
            this.user = {
                name: null,
                email: null,
                office: null,
                password: null,
                password2: null
            }
        },
        handleLimpar(){
            console.log('limpou')
        }
    },
    computed:{
        passwordError: function(){
            console.log(this.user.password, this.user.password2)
            if(this.user.password != null && this.user.password != ''){
                if(this.user.password != this.user.password2){
                    return true;
                }else{
                    return false;
                }       
            }else{
                return false;
            }
        },
        formIncomplete(){
            if(!this.user.name || !this.user.email || !this.user.office || !this.user.password || !this.user.password2){
                return true;
            }
        }
    }
}
</script>

<style>

</style>