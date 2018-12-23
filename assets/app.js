const availableBreaches = [
  '2018-12-08'
]

new Vue({
  el: '#app',
  data () {
    return {
      isBreached: false,
      breaches: [],
      publicKey: window.location.hash.substr(1) || ''
    }
  },
  methods: {
    checkIfBreached () {
      this.isBreached = this.breaches.includes(this.publicKey)
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
