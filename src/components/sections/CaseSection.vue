<template>
  <div v-if="cases" id="cases">
    <div class="flex flex-wrap bg-black-dark pt-6 md:pt-12">
      <div class="flex w-full justify-center">
        <h1 class="uppercase text-white py-6 md:py-12 tracking-wide text-3xl lg:text-4xl">Cases</h1>
      </div>
      <div class="flex flex-wrap w-full md:justify-center">
        <div class="flex mt-2 md:mt-0 mx-4 lg:mx-6" v-for="(item, index) in cases" :key="'case'+index">
          <a href="" @click.prevent="selectCase(index)" class="border-b-2 sm:hover:border-tag-grey" :class="getBorderColor(index)">
            <h2 class="uppercase text-white font-light tracking-wide text-lg md:text-xl lg:text-2xl py-2 md:pb-4" v-text="item.name"></h2>
          </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-center bg-black-light">
      <div class="invisible md:visible flex w-1/2 md:my-24 md:pr-16 relative" id="macbook">
        <img class="hidden md:block h-96 relative z-10 max-w-650" src="@/assets/img/MacBook-Gold.png" alt="MacBook" />
        <vue-anime
          ref="screenshot"
          class="hidden md:block absolute"
          style="clip-path: circle(100% at 50% 50%); -webkit-clip-path: circle(100% at 50% 50%);"
          :animate="{
            clipPath: [
              {value: 'circle(5% at 60% 40%)', duration: 200, easing: 'easeOutCubic'},
              {value: 'circle(71.3% at 50% 50%)', duration: 600, easing: 'easeOutCubic'}
              ],
            webkitClipPath: [
              {value: 'circle(5% at 60% 40%)', duration: 200, easing: 'easeOutCubic'},
              {value: 'circle(71.3% at 50% 50%)', duration: 600, easing: 'easeOutCubic'}
              ],
            opacity: [
              {value: 1, duration: 200},
              {value: 0, duration: 0},
              {value: 1, duration: 600}
            ]
          }">
          <img
            class="h-96  max-w-650"
            :src="cases[selectedCase].screenshot"
            alt="Buitenlandportaal_screen" />
        </vue-anime>
      </div>
      <div class="flex flex-col w-full md:w-1/2 pt-6 md:pt-24 mx-0 md:pr-4 min-h-500 md:min-h-600">
        <vue-anime ref="case" class="flex flex-grow" :animate="{
          scale: [{value: 0.9, duration: 200, easing: 'easeOutCubic'}, {value: 1, duration: 600, easing: 'easeOutCubic' }],
          opacity: [{value: 0.1, duration: 200, easing: 'easeOutCubic'}, {value: 0, duration: 0}, {value: 1, duration: 600, easing: 'easeOutCubic'}]
        }"
        :playing="false">
          <single-case :name="cases[selectedCase].name" :url="cases[selectedCase].url" :description="cases[selectedCase].description" :tags="cases[selectedCase].tags" />
        </vue-anime>
        <div class="flex flex-none mb-6 md:mb-16 mt-4 mx-4">
          <button-circle direction="left" @click.native="prevCase()" class="mr-3" @mouseenter.native="showPrevCaseHover = true" @mouseleave.native="showPrevCaseHover = false" />
          <button-circle direction="right" @click.native="nextCase()" @mouseenter.native="showNextCaseHover = true" @mouseleave.native="showNextCaseHover = false" buttonLabel="Volgende case" role="button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cases } from '@/assets/data/cases'
import SingleCase from '@/components/SingleCase'
import ButtonCircle from '@/components/shared/ButtonCircle'
import { VueAnime } from '@/assets/anime'

export default {
  name: 'CaseSection',

  components: {
    SingleCase,
    ButtonCircle,
    VueAnime
  },

  data() {
    return {
      cases: cases,
      selectedCase: 0,
      showPrevCaseHover: false,
      showNextCaseHover: false
    }
  },

  computed: {
    hoveredNextCase () {
      return this.getNextCase()
    },

    hoveredPrevCase () {
      return this.getPrevCase()
    }
  },

  methods: {
    nextCase () {
      this.$refs.case.restart()
      this.$refs.screenshot.restart()
      setTimeout(() => {
        this.selectedCase = this.getNextCase()
      }, 200)
    },

    prevCase () {
      this.$refs.case.restart()
      this.$refs.screenshot.restart()
      setTimeout(() => {
        this.selectedCase = this.getPrevCase()
      }, 200)
    },

    selectCase (index) {
      this.$refs.case.restart()
      this.$refs.screenshot.restart()
      setTimeout(() => {
        this.selectedCase = index
      }, 200)
    },

    getNextCase () {
      if (this.selectedCase < this.cases.length - 1) {
        return this.selectedCase + 1
      }
      return 0
    },

    getPrevCase () {
      if (this.selectedCase > 0) {
        return this.selectedCase - 1
      }
      return this.cases.length - 1
    },

    getBorderColor (index) {
      if (this.selectedCase === index) return 'border-caribbean-green'
      if (this.showPrevCaseHover && this.hoveredPrevCase === index) return 'border-tag-grey'
      if (this.showNextCaseHover && this.hoveredNextCase === index) return 'border-tag-grey'
      return 'border-transparent'
    }
  }
}
</script>

<style scoped>
  #macbook {
    direction: rtl;
  }
</style>
