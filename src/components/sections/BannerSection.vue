<template>
  <div class="flex flex-col">
    <div class="flex-1 bg-white text-center offset-y-20">
      <vue-anime-time-line>
        <h1>
          <vue-anime v-for="(key, index) in words(sentence1)"
            :key="'key' + index"
            class="opacity-0 inline-block font-sans font-montserrat font-extrabold"
            offset="-=700"
            autoplay="true"
            :duration="1000"
            :animate="{
              translateY: [ {value: -15, duration: 700, easing: 'easeOutElastic'} ],
              scale: [{value: 1.4, duration: 100 }, {value: 1, duration: 700 }],
              opacity: [{ value: 1, duration: 800 }]
            }">{{ key + '&nbsp;' }}
          </vue-anime>
        </h1>
        <h2>
          <vue-anime v-for="(key, index) in words(sentence2)"
            :delay="200"
            :key="'key' + index"
            class="opacity-0 inline-block font-sans font-montserrat font-extrabold text-2xl"
            autoplay="true"
            :duration="300"
            offset="-=700"
            :animate="{
              translateY: [ {value: -5, duration: 700, easing: 'easeOutElastic' } ],
              opacity: [{ value: 1, duration: 800 }]
            }">{{ key + '&nbsp;' }}
          </vue-anime>
        </h2>
      </vue-anime-time-line>
    </div>
    <div class="flex flex-row bg-white">
      <div class="flex-1 text-center">
        Laravel
      </div>
      <div class="flex-1 text-center">
        Vue
      </div>
    </div>
    <div class="flex flex-row bg-grey-lightest">
      <div class="flex-1 text-center bg-grey-light m-10">
        Product 1
      </div>
      <div class="flex-1 text-center bg-grey-light m-10">
        Product 2
      </div>
      <div class="flex-1 text-center bg-grey-light m-10">
        Product 3
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
      sentence1: ',,,,,Wij ,maken ,webapplicaties ,op maat',
      sentence2: ',,,met bewezen ,moderne ,technologie',
      seek: null
    };
  },
  methods: {
    words(sentence) {
      return sentence.split(",");
    }
  }
}
</script>
<style>
  .offset-y-20 {
    transform: translateY(20px);
  }
</style>
