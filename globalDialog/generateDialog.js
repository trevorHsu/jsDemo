import Vue from 'Vue'

const genInst = function() {
  let rootEl = document.createElement('div')
  let rootId = `global_dialog_${Math.random()}_${Date.now()}`
  rootEl.setAttribute('id', rootId)
  document.getElementsByTagName('body')[0].appendChild(rootEl)

  let inst = new Vue({
    el: rootEl,
    data() {
      return {
        // config
        title: '',
        beforeClose: null,
        component: null,
        componentOptions: null,
        // ui
        show: false,
        width: '50%',
        confirmButtonLoading: false,
        cancelButtonLoading: false
      }
    },
    methods: {
      closeDialog(action) {
        const done = () => {
          this.show = false

          this.$nextTick(() => {
            this.component = null
          })
        }

        if (action) {
          this.beforeClose
            ? this.beforeClose(action, this, done)
            : done()
        } else {
          done()
        }
      },
      cancelDialog() {
        this.closeDialog('cancel')
      },
      confirmDialog() {
        this.closeDialog('confirm')
      }
    },
    render(h) {
      let contentOptions = Object.assign({}, this.componentOptions || {})
      const content = h(this.component || 'span', contentOptions)

      const cancelBtn = h('el-button', {
        props: {
          type: 'plain',
          size: 'small',
          loading: this.cancelButtonLoading
        },
        on: {
          click: this.cancelDialog
        }
      }, '取消')

      const confirmBtn = h('el-button', {
        props: {
          type: 'primary',
          size: 'small',
          loading: this.confirmButtonLoading
        },
        on: {
          click: this.confirmDialog
        }
      }, '确定')

      const footer = h('div', {
        slot: 'footer'
      }, [ cancelBtn, confirmBtn ])

      return h('el-dialog', {
        props: {
          showClose: false,
          title: this.title,
          visible: this.show,
          width: this.width
        }
      }, [content, footer])
    }
  })

  return inst
}

const generateDialog = (function() {
  let isInit = false
  let inst = null

  return function(option) {
    option = Object.assign({
      title: '提示',
      width: '50%',
      component: null,
      componentOptions: null, // 规则与 h 函数的 option 参数一致
      beforeClose: null // beforeClose(action, this, done)
    }, option || {})

    const { title, width, component, componentOptions, beforeClose } = option

    if (!isInit) {
      isInit = true
      inst = genInst()
    }

    Object.assign(inst, {
      title,
      width,
      component,
      componentOptions,
      beforeClose,
      show: true
    })
  }
})()

export default generateDialog
