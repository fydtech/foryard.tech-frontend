<template>
  <div class="bg-tag-grey py-1 px-2 rounded">
    <span class="font-plex italic text-white text-xs hover:text-caribbean-green" v-text="name"></span>
  </div>
</template>

<script>
export default {
  name: 'CaseTag',

  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
