<template>
  <div id="app" class="container mx-auto">
    <BannerSection />
    <CaseSection />
    <TeamSection />
    <ContactSection />
  </div>
</template>

<script>
import BannerSection from './components/sections/BannerSection'
import CaseSection from './components/sections/CaseSection'
import TeamSection from './components/sections/TeamSection'
import ContactSection from './components/sections/ContactSection'

export default {
  name: 'App',

  components: {
    BannerSection,
    CaseSection,
    TeamSection,
    ContactSection
  }
}
</script>

<style src="./styles/main.css"></style>
