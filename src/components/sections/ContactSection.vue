<template>
  <div
    id="contact"
    class="bg-tangaroa">
    <div class="flex flex-wrap container mx-auto">
      <div class="min-h-600 md:min-h-500 px-10 py-24 w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <div class="flex flex-col justify-between min-h-400">
          <h1 class="uppercase text-3xl lg:text-4xl text-caribbean-green leading-none">Zin in koffie?</h1>
          <p class="text-white text-lg leading-loose">Wij ook! Een goede kop koffie (of thee) is bij uitstek een prettige situatie om jouw vraag te bespreken. Laten we samen kijken naar de mogelijkheden en het realiseren van het juiste stukje software voor jouw organisatie.</p>
          <div class="ml-12 md:ml-24 text-white text-lg">
            <div class="flex items-center">
              <img src="@/assets/img/phone.svg" alt="phone_icon">
              <a class="py-2 ml-6 text-white no-underline" href="tel:+3188 004 0600" rel="noreferrer nofollow">+31 (0) 88 004 0600</a>
            </div>
            <div class="flex items-center">
              <img src="@/assets/img/email.svg" alt="email_icon">
              <a class="py-2 ml-6 text-white no-underline" href="mailto:dev@foryard.tech" rel="noreferrer nofollow">dev@foryard.tech</a>
            </div>
            <div class="flex items-center">
              <img class="self-start sm:self-auto pt-2 sm:pt-0" src="@/assets/img/location.svg" alt="location_icon">
              <a class="py-2 ml-6 text-white no-underline" href="https://goo.gl/maps/HpXX6YLcJtM2" rel="noreferrer nofollow">Kuipersstraat 35, 1074 EE Amsterdam</a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="hidden md:inline md:w-1/4 lg:w-1/3 xl:w-1/2 mt-48 min-h-400 bg-contain bg-no-repeat bg-right-bottom"
        :style="{backgroundImage: `url(${coffeeCup})`}" />
    </div>
    <div id="footer" class="w-full bg-tangaroa-darker">
      <div class="px-10 md:px-20 h-20 flex justify-center lg:justify-start items-center text-white">
        <div class="mx-4 lg:mr-4 flex items-center">
          <img src="@/assets/img/github.svg" alt="github_icon">
          <a class="py-2 ml-2 text-white no-underline" href="https://github.com/fydtech" rel="noreferrer nofollow">fydtech</a>
        </div>
        <div class="mx-4 lg:mr-4 flex items-center">
          <img src="@/assets/img/twitter.svg" alt="twitter_icon">
          <a class="py-2 ml-2 text-white no-underline" href="https://twitter.com/fydtech" rel="noreferrer nofollow">@fydtech</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import coffeeCup from '@/assets/img/coffee_shade.png';
export default {
  name: 'ContactSection',
  data() {
    return {
      coffeeCup
    };
  }
}
</script>
