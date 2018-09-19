<template>
  <div id="header" class="flex flex-col relative pb-16">
    <div class="flex-1 text-start m-10 max-w-sm">
      <h1 class="uppercase text-caribbean-green">Wij maken webapplicaties op maat</h1>
      <p class="mt-20 text-white">met bewezen moderne technologie</p>
    </div>
    <div class="flex flex-row m-10">
      <div class="flex mr-10">
        <img src="@/assets/img/laravel.svg">
      </div>
      <div class="flex">
        <img src="@/assets/img/vue.svg">
      </div>
    </div>
    <div class="flex text-center">
      <div class="flex-1">
        <img src="@/assets/img/chevron-down.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerSection'
}
</script>

<style>
#header {
  background: linear-gradient(rgba(26, 36, 47, 0.9), rgba(26, 36, 47, 0.9)), url("~@/assets/img/header-bg.jpg");
  background-size: cover;
}
</style>
