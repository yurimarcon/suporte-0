<template>
    <v-card
    class="pa-5 text--secondary"
    >
        <h1>Criar usuário:</h1>
        <v-divider class="mb-3"></v-divider>
        
        <v-text-field
        dense
        label="Nome"
        type="text"
        ></v-text-field>
        
        <v-text-field
        dense
        label="E-mail"
        type="email"
        ></v-text-field>
        
        <v-text-field
        dense
        label="Senha"
        type="password"
        :error="false"
        ></v-text-field>
        
        <v-text-field
        dense
        label="Confirme a senha"
        type="password"
        :error="false"
        ></v-text-field>
        
        <v-text-field
        dense
        label="Cargo"
        type="text"
        ></v-text-field>
        
        <v-text-field
        dense
        label="Departamento"
        type="text"
        ></v-text-field>
        <v-text-field
        dense
        label="Empresa"
        type="text"
        ></v-text-field>

        <v-text-field
        dense
        label="Celular (opcional)"
        type="text"
        ></v-text-field>

        <v-text-field
        dense
        label="Grupo"
        type="number"
        ></v-text-field>

        <v-row
        class="d-flex justify-space-around mt-2"
        >
            <v-btn
            color="error darken-1"
            >Limpar</v-btn>
            
            <v-btn
            color="primary"
            >Criar</v-btn>
        </v-row>


    </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>