import generateDialog from './generateDialog'

const $dialog = generateDialog

export default {
  install(Vue) {
    Vue.prototype.$dialog = $dialog
  }
}

export { $dialog }
