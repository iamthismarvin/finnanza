import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import DashboardView from './DashboardView.vue'

describe('DashboardView.vue', () => {
  it('should render the name and version.', () => {
    const wrapper = mount(DashboardView)
    // expect(wrapper.text()).toContain('Finnanza v')
    expect(wrapper.text()).toContain('Finnanza v')
  })
})
