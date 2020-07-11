import Vue from 'vue'

Vue.mixin({
  data: function () {
    return {
      isMobile: window.innerWidth <= 768
    }
  }
})
