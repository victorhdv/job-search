<template>
  <main>
    <section class="flex h-screen flex-col bg-blue-300 pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-yellow-600">TESTE 1</div>
        <div class="col-span-5 col-start-2 border border-yellow-600"><the-headline /></div>
        <div class="col-span-5 col-start-7 border border-yellow-600">TESTE 3</div>
        <div class="col-span-1 col-start-12 border border-yellow-600">TESTE 4</div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from './TheHeadline.vue'

export default {
  name: 'TheHero',
  components: {
    TheHeadline
  },
  beforeCreate() {
    console.log('component is about to be created')
  },
  created() {
    console.log('component has been created')
  }
}
</script>
