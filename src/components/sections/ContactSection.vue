<template>
  <div
    id="contact"
    class="bg-tangaroa overflow-hidden">
    <div class="flex flex-wrap container pr-10 lg:px-20 xl:px-10 mx-auto justify-center items-center">
      <div class="min-h-450 md:min-h pl-2 my-16 w-full md:w-3/4 lg:w-2/3 xl:w-3/5 flex flex-col justify-between">
        <h1 class="uppercase text-3xl lg:text-4xl text-caribbean-green leading-none">Zin in koffie?</h1>
        <p class="text-white text-lg leading-loose">Wij ook! Een goede kop koffie (of thee) is bij uitstek een prettige situatie om jouw vraag te bespreken. Laten we samen kijken naar de mogelijkheden en het realiseren van het juiste stukje software voor jouw organisatie.</p>
        <div class="ml-12 md:ml-24 text-white text-lg">
          <div class="flex items-center">
            <img src="@/assets/img/phone.svg" alt="phone_icon">
            <a class="py-2 ml-6 text-white no-underline hover:text-caribbean-green" href="tel:+3188 004 0600" rel="noreferrer nofollow">+31 (0) 88 004 0600</a>
          </div>
          <div class="flex items-center">
            <img src="@/assets/img/email.svg" alt="email_icon">
            <a class="py-2 ml-6 text-white no-underline hover:text-caribbean-green" href="mailto:dev@foryard.tech" rel="noreferrer nofollow">dev@foryard.tech</a>
          </div>
          <div class="flex items-center">
            <img class="self-start sm:self-auto pt-2 sm:pt-0" src="@/assets/img/location.svg" alt="location_icon">
            <a class="py-2 ml-6 text-white no-underline hover:text-caribbean-green" href="https://goo.gl/maps/HpXX6YLcJtM2" rel="noreferrer nofollow">Kuipersstraat 35, 1074 EE Amsterdam</a>
          </div>
        </div>
      </div>
      <div
        class="self-stretch hidden lg:flex justify-center relative items-end md:w-1/4 lg:w-1/3 xl:w-2/5">
        <div class="w-full h-full flex justify-center items-center absolute pin-t z-10">
          <div>
            <vue-anime
              class="w-24 h-24 bg-white opacity-25 z-10 rounded-full blur-10"
              :playing="playing"
              :loop="true"
              :animate="{
                translateY: [{
                  value: -400, duration: 8000, easing: 'easeOutQuad'
                }],
                scale: [{
                  value: 4, duration: 8000, easing: 'easeOutQuad'
                }],
                opacity: [
                {value: 0, duration: 0},
                {value: 0.15, duration: 1000},
                { value: 0, duration: 8000, easing: 'easeOutQuad' }]
              }">
            </vue-anime>
          </div>
        </div>
        <img
          :src="coffeeCup"
          class="mb-16 w-64 relative"
          alt="coffee_cup" />
      </div>
    </div>
    <div id="footer" class="w-full bg-tangaroa-darker">
      <div class="px-10 md:px-20 h-20 flex justify-center lg:justify-start items-center text-white">
        <div class="mx-4 lg:mr-4 flex items-center">
          <img src="@/assets/img/github.svg" alt="github_icon">
          <a class="py-2 ml-2 text-white no-underline hover:text-caribbean-green" href="https://github.com/fydtech" rel="noreferrer nofollow">fydtech</a>
        </div>
        <div class="mx-4 lg:mr-4 flex items-center relative">
          <img src="@/assets/img/twitter.svg" alt="twitter_icon">
          <a class="py-2 ml-2 text-white no-underline hover:text-caribbean-green" href="https://twitter.com/fydtech" rel="noreferrer nofollow">@fydtech</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueAnime } from 'vue-anime'
import { VueAnimeGroup } from 'vue-anime'
import { VueAnimeTimeLine } from 'vue-anime'
import coffeeCup from '@/assets/img/coffee-shade.svg';
import inViewport from 'vue-in-viewport-mixin'

export default {
  name: 'ContactSection',

  mixins: [inViewport],

  components: {
    VueAnime,
    VueAnimeGroup,
    VueAnimeTimeLine
  },
  data() {
    return {
      coffeeCup,
      playing: false
    };
  },

  watch: {
    'inViewport.now': function(visible) {
      this.playing = visible
    }
  },
}
</script>

