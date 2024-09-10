<template>
  <header-containeir>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>

    <template #subtitle>
      <h1 class="my-4 w-full text-base font-light">
        Together, we create access to information and build products that
        improve people's lives. Want to be a Googler? Find your role.
      </h1>
    </template>
  </header-containeir>
</template>

<script>
import HeaderContaineir from "@/components/Shared/HeaderContaineir.vue";

export default {
  name: "TeamsView",
  components: { HeaderContaineir },
};
</script>
