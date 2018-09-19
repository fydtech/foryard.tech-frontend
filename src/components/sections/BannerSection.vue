<template>
  <div class="bg-red offset-10">
    <div>
      <vue-anime-time-line
        ref="demo11"
        :seek="seek">
        <vue-anime v-for="(key, index) in words"
        :key="'key' + index"
        class="square inline-block"
        offset="-=200"
        autoplay="true"
        duration="500"
        :animate="{
          translateY: [ {value: -10, duration: 500 } ],
          opacity: [{ value: 1 }]
        }">{{ key }}</vue-anime>
      </vue-anime-time-line>
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
      sentence: 'Lorem ipsum dolor sit amet',
      seek: null
    };
  },
  computed: {
    words() {
      return this.sentence.split(" ");
    }
  }
}
</script>
<style>
  .word {
    width: 10px;
  }
  .square, .circle {
    opacity: 0;
  }
  .offset-10 {
    transform: translateY(10px);
  }
</style>
