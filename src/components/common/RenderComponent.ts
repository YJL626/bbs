import { defineComponent, h } from 'vue-demi'

//接受一个组件然后加载
export default defineComponent({
  name: 'renderComponent',
  props: {
    component: { type: Object, required: true },
  },
  setup(props) {
    return () => h(props.component)
  },
})
