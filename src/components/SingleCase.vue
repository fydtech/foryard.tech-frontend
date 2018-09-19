<template>
  <div class="flex flex-col">
    <div class="flex-1 m-2">
      <h1>Case naam</h1>
      <p>Case beschrijving</p>
    </div>
    <div class="flex flex-row">
      <!-- These tags should also go into a separete reusable component. -->
      <div class="bg-blue p-2 m-2 font-plex italic">
        Tag
      </div>
      <div class="bg-blue p-2 m-2 font-plex italic">
        Tag
      </div>
      <div class="bg-blue p-2 m-2 font-plex italic">
        Tag
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SingleCase'
}
</script>
