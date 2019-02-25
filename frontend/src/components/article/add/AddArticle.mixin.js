// import { mapMutations } from 'vuex'

export default {
  computed: {
    title: {
      get () {
        return this.$store.state.Article.title
      }
    },
    content: {
      get () {
        return this.$store.state.Article.content
      }
    }
  },

  methods: {

  }
}
