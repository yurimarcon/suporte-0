<template>
    <v-alert
    class="text--secondary text-center d-flex"
    color="error darken-2"
    colored-border
    elevation="2"
    icon="mdi-chart-box-outline"
    border="left"
    height="130"
    >
    <h1>Total de Usuários: </h1>
    <strong>{{count}}</strong>
    </v-alert>
</template>

<script>
export default {
    props:['count']
}
</script>

<style>
strong{
    font-size: 3rem !important;
}
</style>