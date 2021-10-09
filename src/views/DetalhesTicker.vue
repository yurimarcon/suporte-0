<template>
  <v-container>
    <Detalhes />

  </v-container>
</template>

<script>
import Detalhes from "../components/Detalhes/Detalhes.vue";

export default{
  components:{Detalhes},
  created(){
    if(!this.$route.params.title){
      this.$router.go(-1)
    }
    console.log(this.$route.params)
  },
}
</script>
