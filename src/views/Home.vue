<template>
  <div>
    <v-container>
      <HeaderSaldo />
      <Table />
    </v-container>
  </div>
</template>

<script>
import Table from "../components/Home/Table.vue";
import HeaderSaldo from "../components/Home/HeaderSaldo.vue";

export default {
  components:{Table, HeaderSaldo},
  created(){
    this.$store.dispatch('verifyAuth');    
  },

}
</script>
