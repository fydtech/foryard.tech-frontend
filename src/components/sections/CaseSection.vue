<template>
  <div v-if="cases">
    <div class="flex flex-wrap bg-black-dark">
      <div class="flex w-full justify-center">
        <h1 class="uppercase text-white py-12 tracking-wide text-4xl">Cases</h1>
      </div>
      <div class="flex w-full justify-center">
        <div class="flex mx-8 mb-4" v-for="(item, index) in cases" :key="'case'+index">
          <a href="" @click="selectedCase = index">
            <h2 class="uppercase text-white font-light tracking-wide text-2xl" v-text="item.name"></h2>
          </a>
        </div>
      </div>
    </div>

    <div class="flex justify-center bg-black-light">
      <div class="flex w-1/2 my-16 pr-16" id="macbook">
        <img class="h-96 max-w-none" src="@/assets/img/MacBook-Gold.png" alt="MacBook" />
      </div>
      <div class="flex-1 flex-col w-1/2 pt-24">
          <single-case :name="cases[selectedCase].name" :description="cases[selectedCase].description" :tags="cases[selectedCase].tags" />
          <div class="flex mt-6 self-end">
            <button-circle direction="left" @click.native="prevCase()" class="mr-3" />
            <button-circle direction="right" @click.native="nextCase()" buttonLabel="Volgende case" />
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
      selectedCase: 0
    }
  },

  methods: {
    nextCase () {
      console.log('test')
      if (this.selectedCase < this.cases.length - 1) {
        this.selectedCase++
        return
      }

      this.selectedCase = 0
    },

    prevCase () {
      if (this.selectedCase > 0) {
        this.selectedCase--
        return
      }

      this.selectedCase = this.cases.length - 1
    }
  }
}
</script>

<style scoped>
  #macbook {
    direction: rtl;
  }
</style>
