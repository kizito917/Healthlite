<template>
  <v-app class="main">
    <div>
      <router-view/>
    </div>
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
