<template>
  <div id="app">
    <HeaderSection />
    <BannerSection />
    <ProductSection />
    <CaseSection />
    <TeamSection />
    <ContactSection />
  </div>
</template>

<script>
import HeaderSection from './components/sections/HeaderSection'
import BannerSection from './components/sections/BannerSection'
import ProductSection from './components/sections/ProductSection'
import CaseSection from './components/sections/CaseSection'
import TeamSection from './components/sections/TeamSection'
import ContactSection from './components/sections/ContactSection'

export default {
  name: 'App',

  components: {
    HeaderSection,
    BannerSection,
    ProductSection,
    CaseSection,
    TeamSection,
    ContactSection
  }
}
</script>

<style src="./styles/main.css"></style>
