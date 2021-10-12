<template>
  <div
  class="mx-sm-5 mt-4"
  >
    <v-row>
      <v-col
      cols="12"
      sm="9"
      >
        <HeaderSaldo />
        <Table />
      </v-col>
      <v-col
      cols="3"
      >
        <v-card
        class="pa-3 text--secondary"
        color="warning lighten-3"
        height="600"
        >
          <h1>Anotações</h1>
          <v-divider></v-divider>
          <v-textarea
          rows="18"
          ></v-textarea>
        </v-card>
      </v-col>

    </v-row>
    <CreateView />
  </div>
</template>

<script>
import Table from "../components/Home/Table.vue";
import HeaderSaldo from "../components/Home/HeaderSaldo.vue";
import CreateView from "../components/Home/DialogCreate/CreateView.vue";

export default {
  components:{Table, HeaderSaldo, CreateView},
  created(){
    this.$store.dispatch('verifyAuth');
  },
}
</script>
