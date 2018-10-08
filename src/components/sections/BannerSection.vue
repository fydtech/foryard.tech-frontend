<template>
  <div
    id="banner"
    class="relative flex flex-col justify-center relative py-16 h-vh-50 min-h-350 md:min-h-vh-60 bg-right bg-cover"
    :style="{ backgroundImage: headerBgReady }">
    <div
      id="split-screen"
      class="flex flex-wrap justify-between p-5 md:p-8 sm:px-10 lg:px-20">
      <div
        id="intro-animation"
        class="w-full md:w-1/2 text-center md:text-left">
        <vue-anime-time-line
          ref="intro"
          :playing="playing">
          <h1>
            <vue-anime
              :duration="1100"
              class="opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green md:text-4xl lg:text-5xl"
              autoplay="true"
              :animate="sentence1Animation1">
              {{ words(sentence1)[0] + '&nbsp;' }}
            </vue-anime>
            <vue-anime v-for="(key, index) in words(sentence1).slice(1)"
              :duration="1000"
              :key="'key' + index"
              class="opacity-0 inline-block font-montserrat font-extrabold uppercase text-caribbean-green md:text-4xl lg:text-5xl"
              autoplay="true"
              offset="-=500"
              :animate="sentence1Animation2">{{ key + '&nbsp;' }}
            </vue-anime>
          </h1>
          <h2 class="my-6 leading-none">
            <vue-anime v-for="(key, index) in words(sentence2)"
              :duration="800"
              offset="-=600"
              :key="'key' + index"
              class="opacity-0 inline-block font-sans font-hind font-normal text-white text-xl md:text-2xl lg:text-3xl"
              autoplay="true"
              :animate="sentence2Animation">{{ key + '&nbsp;' }}
            </vue-anime>
          </h2>
          <div
            class="flex flex-col justify-center">
            <vue-anime
              :duration="800"
              offset="+=100"
              autoplay="true"
              :animate="logoAnimation"
              class="opacity-0 scale-0 flex flex-wrap justify-center md:justify-start">
              <div class="flex justify-center md:justify-start w-full">
                <banner-tech-logo type="laravel" :animation="laravelVibrateAnimation" @mouseenter.native="laravelLogoHover = true" @mouseleave.native="laravelLogoHover = false" />
                <banner-tech-logo type="vue" :animation="vueVibrateAnimation" @mouseenter.native="vueLogoHover = true" @mouseleave.native="vueLogoHover = false" />
              </div>
              <div
                class="bg-tag-grey p-4 rounded items-center flex scale-x-0 h-16 w-48"
                :class="{ 'transition-all-15 scale-x-100': vueLogoHover || laravelLogoHover }">
                <span
                  class="font-plex italic text-white text-xs hover:text-caribbean-green"
                  v-if="vueLogoHover">
                  Vue.js: The Progressive JavaScript Framework
                </span>
                <span
                  class="font-plex italic text-white text-xs hover:text-caribbean-green"
                  v-if="laravelLogoHover">
                  Laravel: The PHP Framework For Web Artisans
                </span>
              </div>
            </vue-anime>
          </div>
        </vue-anime-time-line>
      </div>
      <div class="hidden md:block w-full md:w-1/2 xl:w-2/5 self-stretch flex">
        <banner-laptop />
      </div>
    </div>
    <div
      id="next-slide"
      class="absolute pin-b pin-l text-center w-full mb-6"
      @mouseenter="downArrowHover = true" @mouseleave="downArrowHover = false" >
      <a
        v-scroll-to="'#products'"
        href="#"
        class="w-3 h-3">
        <vue-anime
          :animate="downArrowAnimation"
          :loop="true"
          :playing="downArrowHover">
          <img
            class="block h-3 md:h-4 w-full"
            src="@/assets/img/chevron-down.svg"
            alt="chevron_down" />
        </vue-anime>
      </a>
    </div>
  </div>
</template>

<script>
import headerBg from '@/assets/img/header-bg.svg'
import BannerLaptop from '@/components/BannerLaptop'
import BannerTechLogo from '@/components/BannerTechLogo'
import { VueAnime } from '@/assets/anime'
import { VueAnimeGroup } from '@/assets/anime'
import { VueAnimeTimeLine } from '@/assets/anime'
import { animations } from '@/assets/anime/banner-animations'

export default {
  name: 'BannerSection',
  components: {
    VueAnime,
    VueAnimeGroup,
    VueAnimeTimeLine,
    BannerLaptop,
    BannerTechLogo
  },
  data() {
    return {
      headerBg,
      headerBgReady: "linear-gradient(rgba(26, 36, 47, 0.9), rgba(26, 36, 47, 0.9))",
      playing: false,
      sentence1: "Wij maken webapplicaties",
      sentence2: "met bewezen moderne technologie",
      laravelLogoHover: false,
      vueLogoHover: false,
      downArrowHover: false,
      ...animations
    };
  },
  mounted() {
    let loadedImage = new Image();
    loadedImage.src = this.headerBg;
    this.waitForImageToLoad(loadedImage)
    .then(() => {
      this.headerBgReady = `url(${headerBg})`;
      setTimeout(() => {
        this.playing = true;
      }, 400);
    })
  },
  methods: {
    words(sentence) {
      return sentence.split(" ");
    },
    waitForImageToLoad(imageElement) {
      return new Promise(resolve => {
        imageElement.onload = resolve;
      })
    }
  }
}
</script>
<style>
.fade-enter-active {
  transition: opacity 0.3s
}

.fade-leave-active {
  transition: opacity 0.5s
}
</style>

