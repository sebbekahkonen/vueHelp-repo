<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
	<!-- Detta är vart våra routes kommer att användas -->
      <router-view></router-view>

	<!-- Ifall man skulle behöva kalla på components 
	istället för att mappa i routerView så kan man göra såhär -->
	<!-- <Header/> -->
    </v-main>
  </v-app>
</template>

<script>
// import Header from './components/Header.vue'
export default {

  /* Här skulle man kunna kalla på components som man importerar in 
     till exempel ifall man hade en component som heter header.vue */
  /* Då kan man skriva ut dom i template som <Header/> till exempel */
  components: {
	//<Header/>
  },

  data: () => ({
    //
  }),
};
</script>
