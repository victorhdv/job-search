<template>
  <ul>
    <li v-for="item in spotlights" :key="item.id">
      <slot
        :img="item.img"
        :title="item.title"
        :description="item.description"
      ></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "SpotLigth",
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const url = `${baseUrl}/spotlights`;
    const response = await axios.get(url);
    this.spotlights = response.data;
  },
};
</script>
