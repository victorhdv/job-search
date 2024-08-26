<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <div class="transition-shadow">
        <span :class="actionClasses"> {{ action }}</span> <br />
      </div>
      <div class="mt-0 text-8xl font-bold tracking-tighter">for everyone</div>
    </h1>
    <h2 class="mb-14 text-3xl font-light">Find your next job at Vale Corp.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "TheHeadline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: blue;
}
.create {
  color: green;
}
.design {
  color: orange;
}
.code {
  color: red;
}
</style>
