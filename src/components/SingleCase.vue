<template>
  <div class="flex flex-col">
    <div class="flex-1 m-2">
      <h1 class="uppercase text-caribbean-green text-2xl" v-text="name"></h1>
    </div>
    <div class="flex flex-wrap">
      <case-tag class="m-2" v-for="(tag, index) in tags" :key="'tag'+index" :name="tag" />
    </div>
    <div class="flex-1 m-2">
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
