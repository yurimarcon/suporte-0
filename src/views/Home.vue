<template>
  <div>
    <v-container>
      <HeaderSaldo />
      <Table />
      <ButtonPlus />
    </v-container>
  </div>
</template>

<script>
import Table from "../components/Home/Table.vue";
import HeaderSaldo from "../components/Home/HeaderSaldo.vue";
import ButtonPlus from "../components/Home/ButtonPlus.vue";

export default {
  components:{Table, HeaderSaldo, ButtonPlus},
  created(){
    this.$store.dispatch('verifyAuth');
  },
}
</script>
