<template>
  <div class="bg-black-dark h-screen">
    <div class="flex flex-col lg:flex-row bg-white lg:h-20 px-20">
      <div class="flex">
        <div class="flex">
          <img class="my-2" src="@/assets/img/foryard-logo-tech.svg">
        </div>
      </div>
    </div>
    <div class="flex flex-wrap">
      <div class="flex w-full justify-center">
        <h1 class="uppercase text-white py-12 tracking-wide text-4xl">404</h1>
      </div>
      <div class="w-full text-white text-center">
        <p class="mb-4">De pagina kon niet gevonden worden.</p>
        <router-link class="text-caribbean-green" to="/">Ga terug</router-link>
      </div>
    </div>
  </div>
</template>
