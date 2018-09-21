<template>
  <div class="flex flex-col">
    <div class="flex-1 bg-white text-center mt-10">
      <vue-anime-time-line>
        <h1>
          <vue-anime
            :duration="1100"
            class="opacity-0 inline-block font-sans font-montserrat font-extrabold"
            autoplay="true"
            :animate="{
              translateY: [ {value: -25, duration: 1000, easing: 'easeOutQuint' } ],
              opacity: [{ value: 1, duration: 1000 }],
              scale: [{value: 1.5, duration: 100, easing: 'easeOutElastic' }, {value: 1, duration: 900, easing: 'easeOutElastic' }],
            }">{{ words(sentence1)[0] + '&nbsp;' }}
          </vue-anime>
          <vue-anime v-for="(key, index) in words(sentence1).slice(1)"
            :duration="1000"
            :key="'key' + index"
            class="opacity-0 inline-block font-sans font-montserrat font-extrabold"
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
            class="opacity-0 inline-block font-sans font-montserrat font-extrabold text-2xl mt-8"
            autoplay="true"
            :animate="{
              translateY: [ {value: -25, duration: 800, easing: 'easeOutQuint' } ],
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
      sentence1: 'Wij,maken,webapplicaties,op maat',
      sentence2: 'met,bewezen,moderne,technologie,',
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