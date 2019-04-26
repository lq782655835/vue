import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // _init方法实例,根据参数开始绑定相关实例

  // initLifecycle: 绑定$parent等参数
  // initEvents(vm)：绑定监听事件
  // initRender 绑定vm.$slots等参数
  // initInjections 处理option.inject参数
  // initState： 处理(data/props/watch)参数
  // initProvide 处理option.provide参数
  this._init(options)
}

// 绑定一些方法到Vue的原型链中
initMixin(Vue) // 绑定_init原型方法
stateMixin(Vue) // 绑定$set/$delete/$watch原型方法
eventsMixin(Vue) // 绑定$on/$once/$off/$emit原型方法
lifecycleMixin(Vue) // $forceUpdate/$destory
renderMixin(Vue) // $nextTick

export default Vue
