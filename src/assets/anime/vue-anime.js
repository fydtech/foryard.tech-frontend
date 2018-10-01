import animeMixin from './anime-mixin'

export default {
  name: 'vue-anime',
  mixins: [animeMixin],

  data () {
    return {
    }
  },

  render (h) {
    const slots = this.$slots.default
    let children = slots
    const { footer } = this.$slots
    if (footer) {
      children = slots ? [...slots, ...footer] : [...footer]
    }
    return h(this.tag, Object.assign({
      class: '_vue-anime'
    }, this.$attrs), children)
  },

  methods: {

  }
}
