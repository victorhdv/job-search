<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-28">
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
  </main>
</template>

<script>
import TheHeadline from './TheHeadline.vue'
import JobSearchForm from './JobSearchForm.vue'
import nextElementInList from '@/utils/nextElementInList'

export default {
  name: 'TheHero',
  components: {
    TheHeadline,
    JobSearchForm
  },
  data() {
    return {
      image: 'https://www.gstatic.com/hiring/CportalUi/hero_1_1x.png',
      interval: null
    }
  },
  created() {
    this.changeImg()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeImg() {
      this.interval = setInterval(() => {
        const images = [
          'https://www.gstatic.com/hiring/CportalUi/hero_1_1x.png',
          'https://www.gstatic.com/hiring/CportalUi/hero_2_1x.png',
          'https://www.gstatic.com/hiring/CportalUi/hero_3_1x.png',
          'https://www.gstatic.com/hiring/CportalUi/hero_4_1x.png'
        ]
        this.image = nextElementInList(images, this.image)
      }, 3000)
    }
  }
}
</script>
