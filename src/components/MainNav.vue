<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a
          href="https://github.com/victorhdv"
          target="_blank"
          class="flex h-full items-center text-xl"
          >{{ company }}</a
        >
        <h2 class="ml-8 flex h-full items-center text-xs">Developed by {{ author }}</h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Vale Careers',
      author: 'Victor Vale'
    }
  }
}
</script>
