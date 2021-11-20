<template>
  <!-- coin insert -->
  <vending-machine-coin-insert v-model="totalCoins"/>
  <!-- touch pad -->
  <vending-machine-touch-pad v-model="selectedNumber"/>
  <!-- enter button -->
  <button
    class="enter-button no-select "
    :disabled="selectDisabled"
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
    <div style="font-size: 18px; margin-bottom: 10px; text-align: center;"><b>Thank you! Please come again.</b></div>
    <!-- 5 -->
    <coin-template
      v-for="coin in change.rand5"
      :key="coin"
      :coinValue="5"
      @click="insertCoin(5)"
    />
    <!-- 2 -->
    <coin-template
      v-for="coin in change.rand2"
      :key="coin"
      :coinValue="2"
      @click="insertCoin(2)"
    />
    <!-- 1 -->
    <coin-template
      v-for="coin in change.rand1"
      :key="coin"
      :coinValue="1"
      @click="insertCoin(1)"
    />
    <!-- 0.5 -->
    <coin-template
      v-for="coin in change.cent50"
      :key="coin"
      :coinValue="0.5"
      @click="insertCoin(0.5)"
    />
    <!-- 0.2 -->
    <coin-template
      v-for="coin in change.cent20"
      :key="coin"
      :coinValue="0.20"
      @click="insertCoin(0.20)"
    />
    <!-- 0.10 -->
    <coin-template
      v-for="coin in change.cent10"
      :key="coin"
      :coinValue="0.10"
      @click="insertCoin(0.10)"
    />
    <!-- 0.5 -->
    <coin-template
      v-for="coin in change.cent05"
      :key="coin"
      :coinValue="0.05"
      @click="insertCoin(0.05)"
    />

  </el-dialog>
</template>

<script lang="ts">
import ProductTypeInterface from '@/classes/interface/productTypeInterface'
import { ElMessage } from 'element-plus'
import { computed, defineComponent, PropType, Ref, ref } from 'vue'
import VendingMachineCoinInsert from './VendingMachineCoinInsert.vue'
import VendingMachineTouchPad from './VendingMachineTouchPad.vue'
import CoinChangeInterface from '@/classes/interface/coinChangeInterface'
import CoinTemplate from '@/components/Coin.vue'

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
    CoinTemplate
  },
  setup (props, { emit }) {
    const totalCoins: Ref<number> = ref(0)
    const selectedNumber: Ref<string> = ref('')
    const dialogChangeVisible: Ref<boolean> = ref(false)
    const change: Ref<CoinChangeInterface> = ref({
      cent05: 0,
      cent10: 0,
      cent20: 0,
      cent50: 0,
      rand1: 0,
      rand2: 0,
      rand5: 0
    })

    const selectDisabled = computed(() => {
      if (!totalCoins.value || totalCoins.value === 0 || !selectedNumber.value || selectedNumber.value === '') return true
      return false
    })

    function selectProduct () {
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
        return
      }

      // deduct coins
      totalCoins.value = totalCoins.value - product.price

      // give change
      calculateChange()
      dialogChangeVisible.value = true

      // set coins to R0
      totalCoins.value = 0
      // set select number to ''
      selectedNumber.value = ''

      // give product
      emit('dispense-product', product)
    }

    function calculateChange () {
      change.value.rand5 = perCoinChange(5)
      change.value.rand2 = perCoinChange(2)
      change.value.rand1 = perCoinChange(1)
      change.value.cent50 = perCoinChange(0.5)
      change.value.cent20 = perCoinChange(0.2)
      change.value.cent10 = perCoinChange(0.1)
      change.value.cent05 = perCoinChange(0.05)
    }

    function perCoinChange (coinValue: number): number {
      const remainderValue = totalCoins.value % coinValue
      const totalChange = (totalCoins.value - remainderValue) / coinValue
      totalCoins.value = Math.round((remainderValue + Number.EPSILON) * 100) / 100
      return totalChange
    }

    function checkIfProductExits (): ProductTypeInterface | null {
      // check if product exists
      const product: ProductTypeInterface = props.products.filter((item: ProductTypeInterface) => item.number === selectedNumber.value)[0]
      return product
    }

    return {
      totalCoins,
      selectedNumber,
      selectDisabled,
      selectProduct,
      change,
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
