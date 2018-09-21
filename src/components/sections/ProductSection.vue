<template>
  <div class="flex flex-col lg:flex-row pt-12">
    <div class="flex-1 m-4">
      <icon-with-text
        title="Webapplicaties"
        text="Razendsnelle webapplicaties met een CMS (en/of CRM) op maat. Eindeloos veel integraties met bestaande systemen en datasets."/>
    </div>
    <div class="flex-1 m-4">
      <icon-with-text
        title="Apps"
        text="Progressive web apps voor iOS, Android en het web met ondersteuning voor native features."/>
    </div>
    <div class="flex-1 m-4">
      <icon-with-text
        title="UX Design"
        text="Design waarbij de gebruiker centraal staat met een sterke focus op eenvoud en gebruiksgemak."/>
    </div>
  </div>
</template>

<script>
import IconWithText from '@/components/shared/IconWithText'
export default {
  name: 'ProductSection',
  components: {
    IconWithText
  }
}
</script>
