<template>
  <div>
    <a
      class="inline-flex items-center no-underline"
      @mousedown.native="changeMouse"
      @mouseup.native="changeMouse" >
      <button
        :class="buttonClasses"
        class="text-white bg-caribbean-green h-10 w-10 rounded-full shadow-green move-fast shadow-green focus:outline-none flex items-center justify-center">
        <img
          v-if="direction === 'left'"
          src="@/assets/img/chevron-prev.svg" />
        <img
          v-else-if="direction === 'right'"
          src="@/assets/img/chevron-next.svg" />
      </button>
      <span
        v-if="buttonLabel"
        class="pl-4 uppercase text-tag-grey font-bold font-montserrat opacity-30">{{ buttonLabel }}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "ButtonCircle",

  props: {
    direction: {
      type: String,
      required: true,
      validator: function(value) {
        return ["left", "right"].indexOf(value) !== -1;
      }
    },

    buttonLabel: {
      type: String,
      required: false,
      default: null
    }
  },

  data() {
    return {
      mouseDown: false
    };
  },

  computed: {
    buttonClasses () {
      let classes = ''

      if (this.mouseDown) classes += 'move-d-1 shadow-green '
      if (this.direction === 'left') classes += 'md:hover:move-l-2'
      if (this.direction === 'right') classes += 'md:hover:move-r-2'

      return classes
    }
  },

  methods: {
    changeMouse() {
      this.mouseDown = !this.mouseDown
    }
  }
};
</script>
