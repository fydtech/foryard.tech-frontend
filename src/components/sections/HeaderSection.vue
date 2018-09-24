<template>
  <div class="flex flex-col lg:flex-row bg-white px-20">
    <div class="flex">
      <div class="flex">
        <img class="h-14 my-4" src="@/assets/img/foryard-logo-tech.svg">
      </div>
    </div>
    <div class="flex flex-grow items-center lg:justify-end">
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
