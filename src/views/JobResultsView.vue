<template>
  <div class="flex w-full flex-row flex-nowrap">
    <job-filter-side-bar />
    <job-listings />
  </div>
</template>

<script>
import JobFilterSideBar from '@/components/JobResults/JobFiltersSideBar/JobFilterSideBar.vue'
import JobListings from '@/components/JobResults/JobFiltersSideBar/JobListings.vue'

export default {
  name: 'JobResultsView',
  components: { JobFilterSideBar, JobListings },
  methods: {
    /* diferentes formas de declarar o path
    goToHome() {
       this.$router.push('/') //#1
       this.$router.push({ path: '/' }) //#2
       this.$router.push({ name: 'Home' }) //#3
    }*/
  }
}
</script>
