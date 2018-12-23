new Vue({
  el: '#app',
  data () {
    return {
      isBreached: false,
      breaches: [],
      publicKey: ''
    }
  },
  methods: {
    checkIfBreached () {
      this.isBreached = this.breaches.includes(this.publicKey)
    }
  },
  mounted () {
    // TODO: Update to allow multiple breach files
    window.fetch('./breaches/2018-12-08.json').then(data => data.json()).then(data => this.breaches = data)
  }
})
