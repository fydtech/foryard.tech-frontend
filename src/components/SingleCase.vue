<template>
  <div class="flex flex-col">
    <div class="flex m-2">
      <a :href="url" target="_blank" rel="noopener noreferrer">
        <h1 class="uppercase text-caribbean-green text-xl md:text-2xl" v-text="name"></h1>
      </a>
    </div>
    <div class="flex flex-wrap">
      <case-tag class="m-2" v-for="(tag, index) in tags" :key="'tag'+index" :name="tag" />
    </div>
    <div class="flex m-2">
      <p class="text-white leading-loose" v-text="description"></p>
    </div>
  </div>
</template>

<script>
import CaseTag from '@/components/CaseTag'

export default {
  name: 'SingleCase',

  components: {
    CaseTag
  },

  props: {
    name: {
      type: String,
      required: true
    },

    url: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    tags: {
      type: Array,
      required: false
    }
  }
}
</script>
