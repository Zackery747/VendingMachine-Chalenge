<template>
  <!-- coin insert -->
  <vending-machine-coin-insert v-model="totalCoins"/>
  <!-- touch pad -->
  <vending-machine-touch-pad v-model="selectedNumber"/>
  <!-- enter button -->
  <button
    class="enter-button no-select "
    :disabled="disableSelectButton"
    @click="selectProduct()"
  >
    Select
  </button>
  <!-- change -->
  <el-dialog
    v-model="dialogChangeVisible"
    title="Your Change "
    width="400px"
  >
    <vending-machine-change
      :total-change="totalChange"
    />
  </el-dialog>
</template>

<script lang="ts">
import ProductTypeInterface from '@/classes/interface/productTypeInterface'
import { ElMessage } from 'element-plus'
import { computed, defineComponent, PropType, Ref, ref } from 'vue'
import VendingMachineCoinInsert from './VendingMachineCoinInsert.vue'
import VendingMachineTouchPad from './VendingMachineTouchPad.vue'
import VendingMachineChange from './VendingMachineChange.vue'

export default defineComponent({
  props: {
    products: {
      type: Array as PropType<ProductTypeInterface[]>,
      required: true
    }
  },
  emits: ['dispense-product'],
  components: {
    VendingMachineTouchPad,
    VendingMachineCoinInsert,
    VendingMachineChange
  },
  setup (props, { emit }) {
    const totalCoins: Ref<number> = ref(0)
    const totalChange: Ref<number> = ref(0)
    const selectedNumber: Ref<string> = ref('')
    const dialogChangeVisible: Ref<boolean> = ref(false)

    const disableSelectButton = computed(() => {
      if (!totalCoins.value || totalCoins.value === 0 || !selectedNumber.value || selectedNumber.value === '') return true
      return false
    })

    function selectProduct () {
      totalChange.value = 0

      // check if product exists
      const product: ProductTypeInterface | null = checkIfProductExits()
      if (!product) {
        ElMessage({
          showClose: true,
          message: 'Oops, invalid product number. Please try again.',
          type: 'error'
        })
        selectedNumber.value = ''
        return
      }

      // check if client can afford the product
      if (product.price > totalCoins.value) {
        ElMessage({
          showClose: true,
          message: 'Oops, you don\'t have enough coins.',
          type: 'error'
        })
        selectedNumber.value = ''
        return
      }

      // deduct coins
      totalChange.value = totalCoins.value - product.price

      // set coins to R0
      totalCoins.value = 0
      // set select number to ''
      selectedNumber.value = ''

      // give product
      emit('dispense-product', product)
      setTimeout(() => {
        dialogChangeVisible.value = true
      }, 2100)
    }

    function checkIfProductExits (): ProductTypeInterface | null {
      // check if product exists
      const product: ProductTypeInterface = props.products.filter((item: ProductTypeInterface) => item.number === selectedNumber.value)[0]
      return product
    }

    return {
      totalCoins,
      totalChange,
      selectedNumber,
      disableSelectButton,
      selectProduct,
      dialogChangeVisible
    }
  }
})
</script>

<style scoped>
.enter-button {
  width: 90%;
  height: 45px;
  margin: auto;
  background: #fff;
  border: 2px solid #212F3D;
  border-radius: 7px;
  font-family: "Saira Stencil One", Arial, Helvetica, sans-serif;
  font-size: 25px;

  display: grid;
  align-items: center;
  justify-content: center;
}

.enter-button:hover {
  font-size: 26px;
}
</style>
