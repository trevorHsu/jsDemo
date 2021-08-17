# element-ui 全局dialog组件
> 基于单例模式，在运行环境中使用一个全局的dialog实例；
<br>挂载在Vue上后，可在组件中通过 **this.$dialog** 调用，操作灵活

<br>

## 引入
``` js
import Vue from 'vue'
import ElementUI from 'element-ui'
import dialog from '@/components/GlobalDialog'

Vue.use(ElementUI)
Vue.use(dialog)
```
<br>

## 使用示例
``` js
import Content from './Content'

const id = 123456

const successFn = () => {
  this.$message.success('保存成功')
  this.refreshTable()
}

const failFn = () => {
  this.$message.error('保存失败')
}

const toSave = (instance, done) => {
  instance.confirmButtonLoading = true

  instance.$refs.content.save().then(res => {
    instance.confirmButtonLoading = false

    if (res) {
      successFn()
      done()
    } else {
      failFn()
    }
  }).catch(err => {
    console.log(err)
    instance.confirmButtonLoading = false
    failFn()
  })
}

this.$dialog({
  title: `保存`,
  width: '650px',
  component: Content,
  componentOptions: {
    ref: 'content',
    props: { id }
  },
  beforeClose(action, instance, done) {
    switch (action) {
      case 'confirm':
        toSave(instance, done)
        break
      default:
        done()
    }
  }
})
```
<br>

## 配置参数
> $dialog 方法的参数为一个Object对象，用于配置全局dialog

### 配置字段如下：
| 字段名             | 说明        | 参数类型 | 默认值 |
| -----------        | ----------- | - | - |
| title              | dialog 的标题  | String | 提示 |
| width              | dialog 的宽度        | String, Number | 50% |
| beforeClose        | dialog 关闭前的钩子函数 beforeClose(action, instance, done)，<br>共有三个参数: <br>action: 关闭按钮的类型 confirm  cancel；<br>instance: dialog的实例，可用于控制实例的某些状态；<br>done: 执行该方法后才能关闭 dialog     | Function  | null |
|  component         |   dialog 内容的组件    |  Vue Component  | null |
| componentOptions   |  component的配置参数，该参数的配置规则与Vue的渲染函数中的option参数的配置相同     | Object  | null |
