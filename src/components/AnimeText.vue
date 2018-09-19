<template>
  <vue-anime-time-line
    ref="demo11"
    :seek="seek">
      <vue-anime v-for="(key, index) in words(sentence1)"
        :key="'key' + index"
        class="opacity-0 inline-block font-sans font-montserrat font-extrabold"
        offset="-=200"
        autoplay="true"
        :duration="500"
        :animate="{
          translateY: [ {value: -10, duration: 500 } ],
          opacity: [{ value: 1 }]
        }">{{ key + '&nbsp;' }}
      </vue-anime>
  </vue-anime-time-line>
</template>
<script>
export default {
  name: "AnimeText"
}
</script>
<style>
</style>
