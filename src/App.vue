<template>
  <v-app id="inspire">
    <v-app-bar 
    app
    v-if="this.$route.name != 'login'"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
              
      <div
      class="text-center text--secondary py-5"
      >
        <v-avatar
        size="150"
        >
          <v-img :src="profile.photo"></v-img>
        </v-avatar>
        
        <p class="mt-3 font-weight-bold">{{profile.name}}</p>
        <p>{{profile.email}}</p>
      </div>
      
      <v-divider></v-divider>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="selectedItem"
          color="primary"
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          

          <!-- Sair -->
          <v-list-item
          @click="$store.dispatch('logOut')"
          >
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Sair -->

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    selectedItem: 0,
    items: [
      { text: 'Início', icon: 'mdi-home', to:'/home'},
      { text: 'Avançados', icon: 'mdi-database-cog', to:'/avancado'},
    ],
    profile:{
      photo : "https://cdn-icons-png.flaticon.com/512/3237/3237472.png",
      name  : null,
      email : null
    }
  }),
  updated(){
    // console.log(this.$store.state.auth.user)
    if(this.$store.state.auth.user){
      if(this.$store.state.auth.user.photoURL)this.profile.photo = this.$store.state.auth.user.photoURL;
      this.profile.email = this.$store.state.auth.user.email,
      this.profile.name = this.$store.state.auth.user.displayName;
    }
  }
};
</script>

<style>
*{
  font-family: 'Nunito', sans-serif;
}
</style>