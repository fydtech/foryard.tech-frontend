<template>
  <div id="header" class="flex flex-col relative pb-16 h-banner">
    <div class="flex-1 text-left m-8">
      <vue-anime-time-line>
        <h1>
          <vue-anime
            :duration="1100"
            class="opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green"
            autoplay="true"
            :animate="{
              translateY: [ {value: -25, duration: 1000, easing: 'easeOutQuint' }],
              opacity: [{ value: 1, duration: 1000 }],
              scale: [{value: 1.5, duration: 100, easing: 'easeOutElastic' }, {value: 1, duration: 900, easing: 'easeOutElastic' }],
            }">{{ words(sentence1)[0] + '&nbsp;' }}
          </vue-anime>
          <vue-anime v-for="(key, index) in words(sentence1).slice(1)"
            :duration="1000"
            :key="'key' + index"
            class="opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green"
            autoplay="true"
            offset="-=500"
            :animate="{
              translateY: [ {value: -25, duration: 1000, easing: 'easeOutQuint' } ],
              opacity: [{ value: 1, duration: 1000 }],
              scale: [{value: 1.3, duration: 90, easing: 'easeOutElastic' }, {value: 1, duration: 810, easing: 'easeOutElastic' }],
            }">{{ key + '&nbsp;' }}
          </vue-anime>
        </h1>
        <h2>
          <vue-anime v-for="(key, index) in words(sentence2)"
            :duration="800"
            offset="-=600"
            :key="'key' + index"
            class="opacity-0 inline-block font-sans font-hind font-normal text-white text-2xl mt-6"
            autoplay="true"
            :animate="{
              translateY: [ {value: -25, duration: 800, easing: 'easeOutQuint' } ],
              opacity: [{ value: 1, duration: 800 }]
            }">{{ key + '&nbsp;' }}
          </vue-anime>
        </h2>
      </vue-anime-time-line>
    </div>
    <div class="flex flex-row m-10">
      <div class="flex mr-10">
        <img src="@/assets/img/laravel.svg">
      </div>
      <div class="flex">
        <img src="@/assets/img/vue.svg">
      </div>
    </div>
    <div class="flex text-center">
      <div class="flex-1">
        <a
          v-scroll-to="'#products'"
          href="#">
          <vue-anime
            :animate="{
              translateY: [{
                value: 10,
                duration: 1000,
                easing: 'easeInQuad'
              },
              {
                value: 0,
                duration: 1000,
                easing: 'easeOutQuad'
              }]
            }"
            :loop="true">
            <img
              class="p-4"
              src="@/assets/img/chevron-down.svg" />
          </vue-anime>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAnime } from 'vue-anime'
import { VueAnimeGroup } from 'vue-anime'
import { VueAnimeTimeLine } from 'vue-anime'

export default {
  name: 'BannerSection',
  components: {
    VueAnime,
    VueAnimeGroup,
    VueAnimeTimeLine
  },
  data() {
    return {
      sentence1: 'Wij maken webapplicaties',
      sentence2: 'met bewezen moderne technologie'
    };
  },
  methods: {
    words(sentence) {
      return sentence.split(" ");
    }
  }
}
</script>

<style>
#banner {
  background: linear-gradient(rgba(26, 36, 47, 0.9), rgba(26, 36, 47, 0.9)), url("~@/assets/img/header-bg.jpg");
  background-size: cover;
}
</style>
