<template>
  <div class="relative bg-blue z-0">
    <div class="absolute z-0">
      <img src="@/assets/img/laptop.png" alt="laptop">
    </div>
    <div class="absolute z-10">
      <vue-anime
        :autoplay="true"
        :playing="true"
        :loop="true"
        style="clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);"
        :animate="{
          clipPath: [
          { value: 'polygon(0 0, 100% 0, 100% 0, 0 0)', duration: 1000, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 20%, 0 15%)', duration: 800, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 20%, 0 15%)', duration: 3000, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 40%, 0 30%)', duration: 800, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 40%, 0 30%)', duration: 3000, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 55%, 0 35%)', duration: 800, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 55%, 0 35%)', duration: 3000, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 75%, 0 50%)', duration: 800, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 75%, 0 50%)', duration: 3000, easing: 'linear'},
          { value: 'polygon(0 0, 100% 0, 100% 100%, 0 100%0)', duration: 3000, easing: 'linear'}
          ]
        }">
        <img src="@/assets/img/code.png" alt="code">
      </vue-anime>
    </div>
  </div>
</template>

<script>
import { VueAnime } from 'vue-anime'
import { VueAnimeGroup } from 'vue-anime'
import { VueAnimeTimeLine } from 'vue-anime'

export default {
  name: "BannerLaptop",
  components: {
    VueAnime,
    VueAnimeGroup,
    VueAnimeTimeLine
  },
  methods: {
    codePlaying() {
      return true;
    }
  }
}
</script>

<style>
</style>

