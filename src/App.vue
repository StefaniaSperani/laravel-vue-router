<template>
  <HeaderComp></HeaderComp>
  <main class="container">
    <router-view></router-view>
  </main>

</template>
<script>
import HeaderComp from './components/HeaderComp.vue';
export default {
  name: 'App',
  components: {
    HeaderComp
  }

}
</script>

<style lang="scss" scoped>

</style>