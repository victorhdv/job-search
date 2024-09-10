<template>
  <header :class="['w-full', 'text-sm', headerHeigthClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl font-bold"
          >Vale Careers
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="item in menuItems"
              :key="item.text"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="item.url"
                class="flex h-full items-center py-2.5"
                >{{ item.text }}</router-link
              >
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" @click="loginUser" />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { useUserStore } from "@/stores/user";
import { mapActions, mapState } from "pinia";
import ActionButton from "../Shared/ActionButton.vue";
import ProfileImage from "./ProfileImage.vue";
import SubNav from "./SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/teams" },
        { text: "Locations", url: "/" },
        { text: "Benefits", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
        { text: "Students", url: "/" },
      ],
    };
  },
  computed: {
    ...mapState(useUserStore, ["isLoggedIn"]),
    headerHeigthClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    ...mapActions(useUserStore, ["loginUser"]),
  },
};
</script>
