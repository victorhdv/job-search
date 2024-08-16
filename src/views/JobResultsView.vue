<template>
  <h1 class="text-6xl font-bold">JObResultsPAge</h1>
  <button @click="goToHome">Go to Home Page</button>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    goToHome() {
      // this.$router.push('/') //#1
      // this.$router.push({ path: '/' }) //#2
      this.$router.push({ name: 'Home' }) //#3
    }
  }
}
</script>
