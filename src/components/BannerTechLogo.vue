<template>
  <div class="flex items-center justify-center md:justify-start">
    <div class="flex items-center cursor-pointer transition-all-15 md:hover:scale-110 md:hover:rotate--15">
      <vue-anime
        class="flex items-center rotate-0"
        :delay="5000"
        :autoplay="true"
        :animate="animation">
        <img
          v-if="isVue"
          class="w-16 h-16 my-6"
          src="@/assets/img/vue-hover.svg"
          alt="vue_logo">
        <img
          v-if="isLaravel"
          class="w-16 h-16 mr-8 my-6"
          src="@/assets/img/laravel-hover.svg"
          alt="laravel_logo">
      </vue-anime>
    </div>
  </div>
</template>

<script>
  import { VueAnime } from '@/assets/anime'

export default {
  name: 'BannerTechLogo',

  components: {
    VueAnime
  },

  props: {
    type: {
      required: true,
      type: String,
      validator: function (value) {
        return ['vue', 'laravel'].indexOf(value) !== -1
      }
    },

    animation: {
      required: true,
      type: Object
    }
  },

  computed: {
    isVue() {
      return this.type === "vue"
    },

    isLaravel() {
      return this.type === "laravel"
    }
  }
}
</script>
