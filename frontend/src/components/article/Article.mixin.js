export default {
  data: () => ({
    id: ''
  }),

  async created () {
    await this.$store.dispatch('getArticles')
  },

  articles: {
    get () {
      return this.$store.state.Articles.articles
    }
  }
}
