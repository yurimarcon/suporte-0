<template>
    <v-fab-transition>
      <v-btn
        color="error darken-1"
        fab
        dark
        top
        left
        class="mt-15"
        fixed
        @click="$router.go(-1)"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
    </v-fab-transition>
</template>

<script>
export default {

}
</script>

<style>

</style>