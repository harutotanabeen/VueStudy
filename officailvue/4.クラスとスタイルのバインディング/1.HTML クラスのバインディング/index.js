var vm = new Vue({
  el: '#example',
  data: {
    isActive: true,
    error: null,
    activeClass: 'active',
    errorClass: 'text-danger'
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})