export default {
  data: () => ({
    id: ''
  }),

  async created () {
    await this.$store.dispatch('getArticles')
  },

  computed: {
    article: {
      get () {
        return this.$store.state.Article.article
      }
    }
  }
}
