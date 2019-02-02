import Vue from 'vue'

export default {
  getArticles (context) {
    return new Promise((resolve, reject) => {
      Vue.http
        .get('http://localhost:1337/api/news')
        .then(({ response }) => {
          context.commit('SET_ARTICLE', response)
          resolve()
        })
        .catch(error => reject(error))
    })
  }
}
