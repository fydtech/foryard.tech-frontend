<template>
  <div class="flex flex-row">
    <div class="flex mr-4">
      <img
        class="rounded-full w-16 h-16 md:w-24 md:h-24"
        :src="image"
        :alt="'photo_' + name">
    </div>
    <div class="flex flex-col w-48">
      <div class="flex text-caribbean-green font-extrabold uppercase text-left">
        {{ name }}
      </div>
      <div class="flex italic text-left">
        {{ role }}
      </div>
      <div class="flex text-grey text-left">
        {{ expertise }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMember',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    expertise: {
      type: String,
      required: true,
    }
  }
}
</script>
