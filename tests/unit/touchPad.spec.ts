import { mount } from '@vue/test-utils'
import VendingMachineTouchPad from '@/components/VendingMachineTouchPad.vue'

describe('Vending Machine: select number', () => {
  /*
    Selecting: 11
  */
  test('Selected number should be 11', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '1'
    wrapper.vm.addInputNumber('1')
    expect(wrapper.vm.numberInput).toEqual('11')
  })

  /*
    Selecting: 12
  */
  test('Selected number should be 12', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '1'
    wrapper.vm.addInputNumber('2')
    expect(wrapper.vm.numberInput).toEqual('12')
  })

  /*
    Selecting: 25
  */
  test('Selected number should be 25', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '2'
    wrapper.vm.addInputNumber('5')
    expect(wrapper.vm.numberInput).toEqual('25')
  })
})

describe('Vending Machine: delete number', () => {
  /*
    Deleting number from 11 to 1
  */
  test('Selected number should be 1', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '11'
    wrapper.vm.deleteNumber()
    expect(wrapper.vm.numberInput).toEqual('1')
  })

  /*
    Deleting number from 23 to 2
  */
  test('Selected number should be 2', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '23'
    wrapper.vm.deleteNumber()
    expect(wrapper.vm.numberInput).toEqual('2')
  })

  /*
    Deleting number from 33 to 3
  */
  test('Selected number should be 3', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '33'
    wrapper.vm.deleteNumber()
    expect(wrapper.vm.numberInput).toEqual('3')
  })
})

describe('Vending Machine: clear numbers', () => {
  /*
    Clearing number from 1 to ''
  */
  test('Selected number should be empty', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '1'
    wrapper.vm.clearNumbers()
    expect(wrapper.vm.numberInput).toEqual('')
  })

  /*
    Clearing number from 22 to ''
  */
  test('Selected number should be empty', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '22'
    wrapper.vm.clearNumbers()
    expect(wrapper.vm.numberInput).toEqual('')
  })
})

describe('Vending Machine: selecting product', () => {
  /*
    Selecting: 33
    This test will select product 33 while will simulating user error
    by selecting and deleting numbers
  */
  test('Selected number should be 33', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = ''
    wrapper.vm.addInputNumber('1')
    wrapper.vm.addInputNumber('3')
    wrapper.vm.deleteNumber()
    wrapper.vm.deleteNumber()
    wrapper.vm.addInputNumber('2')
    wrapper.vm.deleteNumber()
    wrapper.vm.deleteNumber()
    wrapper.vm.addInputNumber('3')
    wrapper.vm.addInputNumber('3')

    expect(wrapper.vm.numberInput).toEqual('33')
  })
})

describe('Vending Machine: disable buttons', () => {
  /*
    Disable buttons by setting the select number to two digits
  */
  test('Button Should be disabled', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '22'
    expect(wrapper.vm.disableButtons).toEqual(true)
  })

  /*
    Enable buttons by setting the select number to one digit
  */
  test('Button Should be enabled', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '2'
    expect(wrapper.vm.disableButtons).toEqual(false)
  })

  /*
    Enable buttons by setting the select number to nothing
  */
  test('Button Should be enabled', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = ''
    expect(wrapper.vm.disableButtons).toEqual(false)
  })
})

describe('Vending Machine: disable delete button', () => {
  /*
    Disable delete button by setting the select number to nothing
  */
  test('Button Should be disabled', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = ''
    expect(wrapper.vm.disableDeleteButtons).toEqual(true)
  })

  /*
    Enable delete button by setting the select number to one digit
  */
  test('Button Should be enabled', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '2'
    expect(wrapper.vm.disableDeleteButtons).toEqual(false)
  })

  /*
    Enable delete button by setting the select number to two digit
  */
  test('Button Should be enabled', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    wrapper.vm.numberInput = '22'
    expect(wrapper.vm.disableDeleteButtons).toEqual(false)
  })
})

describe('Vending Machine: v-model', () => {
  /*
    updating v-model from parent to noting
  */
  test('Select number should be nothing', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: ''
      }
    })

    expect(wrapper.vm.numberInput).toEqual('')
  })

  /*
    updating v-model from parent to 2
  */
  test('Select number should be 2', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: '2'
      }
    })

    expect(wrapper.vm.numberInput).toEqual('2')
  })

  /*
    updating v-model from parent to 22
  */
  test('Select number should be 22', () => {
    const wrapper = mount(VendingMachineTouchPad, {
      props: {
        modelValue: '22'
      }
    })

    expect(wrapper.vm.numberInput).toEqual('22')
  })
})
