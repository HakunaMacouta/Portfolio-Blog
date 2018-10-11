import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  const wrapper = shallowMount(Home)
  // wrapper.setData({ clientWidth: 600, clientHeight: 400 })
  it('contains a canvas', () => {
    expect(wrapper.contains('canvas')).toBe(true)
  })
})
