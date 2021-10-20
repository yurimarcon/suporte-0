<template>
  <v-row>
    <v-col>
      <v-card class="text--secondary pa-5" height="550">
        <ButtonBack />
        <h1>Detalhes:</h1>
        <BotaoConfig />

        <v-divider class="mb-3"></v-divider>

        <v-row >
          <v-col
          cols="12"
          >
          <!-- sm="6" -->
            <span class="font-weight-bold">Título: </span>
            <span>{{this.$route.params.title}}</span>
          </v-col>

          <v-col
          cols="12"
          >
            <span class="font-weight-bold">Prioridade: </span>
            <span>{{this.$route.params.priority}}</span>
          </v-col>

          <v-col
          cols="12"
          >
            <span class="font-weight-bold">Data do chamado: </span>
            <span>{{this.$route.params.id | data(this.$route.params.id)}}</span>
          </v-col>
          
          <v-col
          cols="12"
          >
          <!-- md="6" -->
            <span class="font-weight-bold">Última atualização: </span>
            <span>{{this.$route.params.lastUpdate | data(this.$route.params.lastUpdate)}}</span>
          </v-col>

          <v-col
          cols="12"
          >
            <span class="font-weight-bold">Descrição: </span>
            <span>{{this.$route.params.description}}</span>
          </v-col>
        </v-row>

        <v-divider class="mt-4"></v-divider>
        <h1>Arquivos:</h1>
      </v-card>

    </v-col>
    <v-col
    cols="12"
    md="8"
    >
      <TextAreaMessage />
      <Timeline/>
    </v-col>
  </v-row>

</template>

<script>
import ButtonBack from "../Shared/ButtonBack.vue";
import BotaoConfig from "./BotaoConfig.vue";
import Timeline from "./Timeline.vue";
import TextAreaMessage from "./TextAreaMessage.vue";
export default {
  components:{ButtonBack, BotaoConfig, Timeline, TextAreaMessage},
    filters:{
        data(milisegundos){
            return new Date(milisegundos).toLocaleString();
        }
    }
}
</script>

<style>

</style>