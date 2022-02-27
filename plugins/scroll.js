import Vue from "vue"
const VueScrollTo = require("vue-scrollto")

Vue.use(VueScrollTo, {
  container: "body",
  duration: 0,
  easing: "linear",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
})
