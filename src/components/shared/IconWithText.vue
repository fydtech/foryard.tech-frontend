<template>
  <div class="flex">
    <div class="h-32 w-32 fill-current inline-block">
      <img
        :src="img">
    </div>
    <div class="max-w-650 py-2 px-5">
      <h4 class="uppercase text-xl md:text-2xl py-2 text-shark leading-normal font-hind font-extrabold">{{ title }}</h4>
      <p class="text-shark leading-normal font-hind font-normal">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "IconWithText",
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>
