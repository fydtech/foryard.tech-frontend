<template>
  <div class="flex flex-col sm:flex-row bg-white sm:px-10 lg:px-20">
    <div class="flex justify-center sm:justify-start">
      <img class="h-8 md:h-12 my-4" src="@/assets/img/foryard-logo-tech.svg" alt="logo">
    </div>
    <div class="flex flex-grow items-center justify-center sm:justify-end mb-4 sm:mb-0">
      <div class="flex mr-4 uppercase">
        <a
          v-scroll-to="{
            el: '#cases',
            duration: 500
          }"
          class="no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1"
          href="#">
          Cases
        </a>
      </div>
      <div class="flex mx-4 uppercase">
        <a
          v-scroll-to="{
            el: '#team',
            duration: 1000
          }"
          class="no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1"
          href="#">
          Team
        </a>
      </div>
      <div class="flex mx-4 uppercase">
        <a
          v-scroll-to="{
            el: '#contact',
            duration: 1500
          }"
          class="no-underline text-black tracking-wide border-b-2 border-transparent hover:border-caribbean-green mt-1"
          href="#">
          Contact
        </a>
    </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSection'
}
</script>
