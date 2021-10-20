<template>
    <div>
        <v-dialog
        v-model="dialog"
        max-width="490"
        >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            color="primary"
            rounded
            v-bind="attrs"
            v-on="on"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
        </template>
        <v-card
        class="pa-3 text--secondary"
        >
            <v-form
            class="mb-3"
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
                    color="primary"
                    type="submit"
                    >Gravar</v-btn>
                </v-row>

            </v-form>
        </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    props:['user'],
    data () {
      return {
        dialog: false,
        rules: {
            required: value => !!value || 'Obrigatório.',
            min: v => v && v.length >= 6 || 'No mínimo 6 caracteres'
        },
      }
    },
    methods:{
        handleEnviar(){
            this.$store.dispatch('updateUser', this.user);
        },
    }
}
</script>

<style>

</style>