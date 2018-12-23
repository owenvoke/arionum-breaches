/**
 * Available breach Files
 * @link ../breaches
 **/
const availableBreaches = [
  '2018-12-08'
]

new Vue({
  el: '#app',
  data () {
    return {
      isBreached: null,
      breaches: [],
      publicKey: window.location.hash.substr(1) || ''
    }
  },
  methods: {
    checkIfBreached () {
      this.isBreached = this.breaches.includes(this.publicKey)
    }
  },
  watch: {
    publicKey: function () {
      this.isBreached = null
    }
  },
  mounted () {
    for (let breachId in availableBreaches) {
      window.fetch('./breaches/' + availableBreaches[breachId] + '.json')
        .then(data => data.json())
        .then(data => this.breaches = [...new Set([].concat(...this.breaches, ...data))])
    }
  }
})
