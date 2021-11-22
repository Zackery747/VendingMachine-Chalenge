import { mount } from '@vue/test-utils'
import VendingMachineChange from '@/components/VendingMachineChange.vue'

describe('Vending Machine Change', () => {
  /*
    Change: 25
  */
  test('Check if the amount of change is correct: R25', () => {
    const change = 25
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    expect(wrapper.vm.totalChange).toBe(change)
    expect(wrapper.vm.change).toMatchObject({
      cent05: 0,
      cent10: 0,
      cent20: 0,
      cent50: 0,
      rand1: 0,
      rand2: 0,
      rand5: 5
    })
  })

  /*
    Change: 10.5
  */
  test('Check if the amount of change is correct: R10.5', () => {
    const change = 10.5
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    expect(wrapper.vm.totalChange).toBe(change)
    expect(wrapper.vm.change).toMatchObject({
      cent05: 0,
      cent10: 0,
      cent20: 0,
      cent50: 1,
      rand1: 0,
      rand2: 0,
      rand5: 2
    })
  })

  /*
    Change: 17.52
  */
  test('Check if the amount of change is correct: R17.52', () => {
    const change = 17.55
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    expect(wrapper.vm.totalChange).toBe(change)
    expect(wrapper.vm.change).toMatchObject({
      cent05: 1,
      cent10: 0,
      cent20: 0,
      cent50: 1,
      rand1: 0,
      rand2: 1,
      rand5: 3
    })
  })

  /*
    Change: 35.85
  */
  test('Check if the amount of change is correct: R35.85', () => {
    const change = 35.85
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    expect(wrapper.vm.totalChange).toBe(change)
    expect(wrapper.vm.change).toMatchObject({
      cent05: 1,
      cent10: 1,
      cent20: 1,
      cent50: 1,
      rand1: 0,
      rand2: 0,
      rand5: 7
    })
  })

  /*
    Change: 36.85
  */
  test('Check if the amount of change is correct: R36.85', () => {
    const change = 36.85
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    expect(wrapper.vm.totalChange).toBe(change)
    expect(wrapper.vm.change).toMatchObject({
      cent05: 1,
      cent10: 1,
      cent20: 1,
      cent50: 1,
      rand1: 1,
      rand2: 0,
      rand5: 7
    })
  })
})
