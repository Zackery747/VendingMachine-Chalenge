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

describe('Vending Machine per coin change', () => {
  /*
    Change: 30
    Total R5 coins => 6
  */
  test('Change For R30 in R5 coins should be 6', () => {
    const change = 30
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    wrapper.vm.coinsLeft = change
    expect(wrapper.vm.perCoinChange(5)).toEqual(6)
  })

  /*
    Change: 10
    Total R2 coins => 5
  */
  test('Change For R10 in R2 coins should be 5', () => {
    const change = 10
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    wrapper.vm.coinsLeft = change
    expect(wrapper.vm.perCoinChange(2)).toEqual(5)
  })

  /*
    Change: 5
    Total R1 coins => 5
  */
  test('Change For R5 in R1 coins should be 5', () => {
    const change = 5
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    wrapper.vm.coinsLeft = change
    expect(wrapper.vm.perCoinChange(1)).toEqual(5)
  })

  /*
    Change: 1
    Total 50c coins => 2
  */
  test('Change For R1 in 50c coins should be 2', () => {
    const change = 1
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    wrapper.vm.coinsLeft = change
    expect(wrapper.vm.perCoinChange(0.5)).toEqual(2)
  })

  /*
    Change: 1
    Total 20c coins => 5
  */
  test('Change For R1 in 20c coins should be 5', () => {
    const change = 1
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    wrapper.vm.coinsLeft = change
    expect(wrapper.vm.perCoinChange(0.2)).toEqual(5)
  })

  /*
    Change: 1
    Total 10c coins => 10
  */
  test('Change For R1 in 10c coins should be 10', () => {
    const change = 1
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    wrapper.vm.coinsLeft = change
    expect(wrapper.vm.perCoinChange(0.1)).toEqual(10)
  })

  /*
    Change: 1
    Total 5c coins => 20
  */
  test('Change For R1 in 5c coins should be 20', () => {
    const change = 1
    const wrapper = mount(VendingMachineChange, {
      props: {
        totalChange: change
      }
    })

    wrapper.vm.coinsLeft = change
    expect(wrapper.vm.perCoinChange(0.05)).toEqual(20)
  })
})
