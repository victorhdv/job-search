<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8">
        <a v-bind:href="url" target="_blank" class="flex h-full items-center text-xl font-bold">{{
          company
        }}</a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="item in menuItems" v-bind:key="item" class="ml-9 h-full first:ml-0">
              <a href="/" class="flex h-full items-center py-2.5">{{ item }}</a>
            </li>
          </ul>
        </nav>
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
      url: 'https://github.com/victorhdv',
      menuItems: ['Teams', 'Locations', 'Life at Vale Corp', 'How we hire', 'Students', 'Jobs']
    }
  }
}
</script>
