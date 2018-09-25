<template>
  <div v-if="cases" id="cases">
    <div class="flex flex-wrap bg-black-dark">
      <div class="flex w-full justify-center">
        <h1 class="uppercase text-white py-12 tracking-wide text-4xl">Cases</h1>
      </div>
      <div class="flex flex-wrap w-full md:justify-center">
        <div class="flex mt-2 md:mt-0 mx-4 lg:mx-6" v-for="(item, index) in cases" :key="'case'+index">
          <a href="" @click.prevent="selectedCase = index" class="border-b-2 hover:border-tag-grey" :class="getBorderColor(index)">
            <h2 class="uppercase text-white font-light tracking-wide text-lg md:text-xl lg:text-2xl py-2 md:pb-4" v-text="item.name"></h2>
          </a>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-center bg-black-light">
      <div class="invisible md:visible flex w-1/2 md:my-24 md:pr-16 relative" id="macbook">
        <img class="hidden md:block h-96 max-w-none relative z-10" src="@/assets/img/MacBook-Gold.png" alt="MacBook" />
        <img class="hidden md:block h-96 max-w-none absolute" :src="cases[selectedCase].screenshot" alt="Buitenlandportaal_screen" />
      </div>
      <div class="flex flex-col w-full md:w-1/2 pt-12 md:pt-24 px-8 md:px-0">
        <single-case :name="cases[selectedCase].name" :description="cases[selectedCase].description" :tags="cases[selectedCase].tags" />
        <div class="flex flex-none mb-16 mt-4">
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

export default {
  name: 'CaseSection',

  components: {
    SingleCase,
    ButtonCircle
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
    nextCase (caseType) {
      this.selectedCase = this.getNextCase()
    },

    prevCase (caseType) {
      this.selectedCase = this.getPrevCase()
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
