<template>
  <div class="bg-yellow">
    This is the Case Section
    <single-case />
    <single-case />
  </div>
</template>

<script>
import SingleCase from '@/components/SingleCase'

export default {
  name: 'BannerSection',

  components: {
    SingleCase
  }
}
</script>
