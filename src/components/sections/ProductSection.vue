<template>
  <div
    id="products"
    class="flex-col mb-12 md:mb-24 mt-12">
    <div class="flex-1">
      <h1 class="uppercase tracking-wide text-3xl lg:text-4xl py-6 md:py-12 text-center">Producten</h1>
    </div>
    <div
      class="flex flex-col xl:flex-row px-10 justify-between">
      <div class="flex-1 xl:w-1/4 xl:max-w-25 xl:ml-2">
        <icon-with-text
          title="Webapplicaties"
          text="Razendsnelle webapplicaties met een CMS (en/of CRM) op maat. Eindeloos veel integraties met bestaande systemen en datasets."
          :img="webappImg" />
      </div>
      <div class="flex-1 xl:w-1/4 xl:max-w-25">
        <icon-with-text
          title="Apps"
          text="Progressive web apps voor iOS, Android en het web met ondersteuning voor native features."
          :img="appImg" />
      </div>
      <div class="flex-1 xl:w-1/4 xl:max-w-25 xl:mr-2">
        <icon-with-text
          title="UX Design"
          text="Design waarbij de gebruiker centraal staat met een sterke focus op eenvoud en gebruiksgemak."
          :img="uxDesignImg" />
      </div>
    </div>
  </div>
</template>

<script>
import IconWithText from '@/components/shared/IconWithText'
import webappImg from '@/assets/img/webapp.svg'
import appImg from '@/assets/img/app.svg'
import uxDesignImg from '@/assets/img/ux-design.svg'


export default {
  name: 'ProductSection',

  components: {
    IconWithText
  },

  data () {
    return {
      webappImg,
      appImg,
      uxDesignImg
    }
  }
}
</script>
