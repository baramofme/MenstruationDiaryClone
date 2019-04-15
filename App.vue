<template>
  <v-app>
    <TopToolbar></TopToolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import TopToolbar from "./src/components/layout/TopToolbar.vue";
import BottomNav from "./src/components/layout/BottomNav.vue";

export default {
  components: {
    TopToolbar,
    BottomNav
  }
};
</script>
<style scoped>
.container {
  /* padding-top: 100px; */
  padding: 0px;
  width: 600px;
}
</style>