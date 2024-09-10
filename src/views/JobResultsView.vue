<template>
  <div class="flex w-full flex-row flex-nowrap">
    <job-filters-side-bar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSideBar from "@/components/JobResults/JobFiltersSideBar/JobFiltersSideBar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";

export default {
  name: "JobResultsView",
  components: { JobFiltersSideBar, JobListings },
  methods: {
    /* diferentes formas de declarar o path
    goToHome() {
       this.$router.push('/') //#1
       this.$router.push({ path: '/' }) //#2
       this.$router.push({ name: 'Home' }) //#3
    }*/
  },
};
</script>
