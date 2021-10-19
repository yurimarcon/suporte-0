<template>
  <div class="ma-sm-5">
    
    <v-alert
    color="primary"
    dark
    icon="mdi-face-agent"
    border="left"
    >
    Esse ticket apenas pode ser ser respondido caso o workflow do processo esteja com você.
    </v-alert>

    <Detalhes />
  </div>
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
