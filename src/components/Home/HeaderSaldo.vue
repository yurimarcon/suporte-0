<template>
    <div>
        <v-row
        class="text-center"
        >
            <v-col
            cols="12"
            sm="4"
            >
                <v-alert
                border="left"
                colored-border
                class="text--secondary"
                color="error darken-1"
                elevation="5"
                >
                    <h1>Pendente</h1>
                    <span class="saldo">4</span>
                </v-alert>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            >
                <v-alert
                border="left"
                colored-border
                class="text--secondary"
                color="warning lighten-1"
                elevation="5"
                >
                    <h1>Em atendimento</h1>
                    <span class="saldo">4</span>
                </v-alert>
            </v-col>
            <v-col
            cols="12"
            sm="4"
            >
                <v-alert
                border="left"
                colored-border
                class="text--secondary"
                color="success"
                elevation="5"
                >
                    <h1>Resolvidos</h1>
                    <span class="saldo">4</span>
                </v-alert>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.saldo{
    font-size: 3rem;
    font-weight: 600;
}
</style>