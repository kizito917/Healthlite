<template>
  <v-app class="main">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style scoped>
.main {
  font-family: Inter;
}
</style>
