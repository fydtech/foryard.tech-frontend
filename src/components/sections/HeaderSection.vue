<template>
  <div class="flex flex-col lg:flex-row bg-white px-20">
    <div class="flex">
      <div class="flex">
        <img class="h-14 my-2" src="@/assets/img/foryard-logo-tech.svg">
      </div>
    </div>
    <div class="flex flex-grow items-center lg:justify-end">
      <div class="flex mr-4 uppercase">
        <a
          v-scroll-to="'#cases'"
          class="no-underline text-black tracking-wide"
          href="#">
          Cases
        </a>
      </div>
      <div class="flex mx-4 uppercase">
        <a
          v-scroll-to="'#team'"
          class="no-underline text-black tracking-wide"
          href="#">
          Team
        </a>
      </div>
      <div class="flex mx-4 uppercase">
        <a
          v-scroll-to="'#contact'"
          class="no-underline text-black tracking-wide"
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
