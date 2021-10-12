<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialogConfirma"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Deseja enviar?
        </v-card-title>
        <v-card-text>Para abrir esse chamado basta clicar em <strong style="color: rgb(79, 114, 190)">ENVIAR</strong>.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error darken-1"
            text
            @click="$emit('closeDialog')"
          >
            Disagree
          </v-btn>
          <v-btn
            color="primary darken-1"
            text
            @click="$emit('createTicket')"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
    props:['showConfirmacao'],
    data () {
      return {
        dialogConfirma: true,
      }
    },
}
</script>