<template>
  <v-app id="keep" class="">
    <v-main class="grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  // computed: {

  // },
};
</script>
<style scoped>
.v-main__wrap {
  padding: 40px 24px 24px;
}
.marginWithFooter {
  padding-bottom: 50px;
}
</style>
