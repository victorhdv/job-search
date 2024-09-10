<template>
  <main class="flex h-screen flex-col">
    <section class="pb-20 pt-28">
      <div class="ml-16 grid grid-cols-11">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />
          <job-search-form />
        </div>
        <div class="col-span-4 col-start-7 self-center justify-self-center">
          <img :src="image" alt="imagem" class="h-120 w-120 object-contain" />
        </div>
        <div class="col-span-1 col-start-11"></div>
      </div>
    </section>

    <spot-light class="flex flex-row justify-center pb-16">
      <!-- <template #default="slotProps"> Uma forma de declarar o scoped slot-->
      <!-- Segunda opção quebrando o objeto -->
      <template #default="{ img, title, description }">
        <div
          class="mx-5 flex flex-col h-96 w-72 rounded-lg border bg-brand-gray-2"
        >
          <img :src="img" alt="" class="object-contain" />

          <div class="h-48 px-6 py-4 mt-3">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>

            <p class="">{{ description }}</p>
          </div>

          <router-link
            to="/jobs/results"
            class="px-6 pb-4 text-sm text-brand-blue-1"
            >See jobs</router-link
          >
        </div>
      </template>
    </spot-light>
  </main>
</template>

<script>
import TheHeadline from "./TheHeadline.vue";
import JobSearchForm from "./JobSearchForm.vue";
import nextElementInList from "@/utils/nextElementInList";
import SpotLight from "./SpotLight.vue";

export default {
  name: "TheHero",
  components: {
    TheHeadline,
    JobSearchForm,
    SpotLight,
  },
  data() {
    return {
      image: "https://www.gstatic.com/hiring/CportalUi/hero_1_1x.png",
      interval: null,
    };
  },
  created() {
    this.changeImg();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeImg() {
      this.interval = setInterval(() => {
        const images = [
          "https://www.gstatic.com/hiring/CportalUi/hero_1_1x.png",
          "https://www.gstatic.com/hiring/CportalUi/hero_2_1x.png",
          "https://www.gstatic.com/hiring/CportalUi/hero_3_1x.png",
          "https://www.gstatic.com/hiring/CportalUi/hero_4_1x.png",
        ];
        this.image = nextElementInList(images, this.image);
      }, 3000);
    },
  },
};
</script>
