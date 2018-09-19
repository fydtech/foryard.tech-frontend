<template>
  <div class="flex bg-white">
    <div class="flex flex-col">
      <div class="flex-1 bg-grey-light p-16 m-4">
        Case
      </div>
      <div class="flex-1 bg-grey-light p-16 m-4">
        Case
      </div>
      <div class="flex-1 bg-grey-light p-16 m-4">
        Case
      </div>
      <div class="flex-1 bg-grey-light p-16 m-4">
        Case
      </div>
    </div>
    <div class="flex-1 pt-24">
        <single-case />
    </div>
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
