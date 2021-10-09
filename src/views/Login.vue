<template>
    <div>
        <v-card
        class="mx-auto my-16 py-5"
        max-width="374"
        >

            <v-img
            height="250"
            contain
            src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png"
            ></v-img>

            <v-card-title class="d-flex justify-center">Seja bem vindo(a)</v-card-title>

            <v-form
            class="px-5"
            @submit.prevent="$store.dispatch('loginWithEmailAndPasw', credentials)"
            >
                <v-text-field
                outlined
                label="Login"
                prepend-inner-icon="mdi-account-circle-outline"
                v-model="credentials.login"
                :rules="[rules.required, rules.email]"
                :error="$store.state.auth.loginInvalido"
                ></v-text-field>
                
                <v-text-field
                outlined
                v-model="credentials.password"
                prepend-inner-icon="mdi-lock-outline"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required]"
                :type="show ? 'text' : 'password'"
                label="Senha"
                @click:append="show = !show"
                :error="$store.state.auth.loginInvalido"
                ></v-text-field>

                <v-btn
                color="success"
                block
                type="submit"
                >
                    Entrar
                </v-btn>
                
            </v-form>
            
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            credentials:{
                login    :null,
                password :null
            },
            show: false,
            rules: {
                required: value => !!value || 'Required.',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            },
        }
    }

}
</script>