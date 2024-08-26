<template>
  <img
    :src="imageLink"
    alt="user profile image"
    class="h-8 w-8 rounded-3xl object-contain"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink: "https://avatars.githubusercontent.com/u/85137723?v=4",
    };
  },
};
</script>
