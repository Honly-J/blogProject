<template>
  <section class="app-main">
      <router-view/>
  </section>
</template>

<script>
export default {
  name: 'Layout-main'
}
</script>

<style scoped>
.app-main {
  min-height: 100vh;
  position: relative;
  overflow: auto;
}
</style>
