<template>
  <div style="font-size: 25px; margin-bottom: 10px; text-align: center;"><b>Thank you!</b></div>
  <div style="text-align: center;">
    <!-- 5 -->
    <coin-template
      v-for="coin in change.rand5"
      :key="coin"
      :coinValue="5"
    />
    <!-- 2 -->
    <coin-template
      v-for="coin in change.rand2"
      :key="coin"
      :coinValue="2"
    />
    <!-- 1 -->
    <coin-template
      v-for="coin in change.rand1"
      :key="coin"
      :coinValue="1"
    />
    <!-- 0.5 -->
    <coin-template
      v-for="coin in change.cent50"
      :key="coin"
      :coinValue="0.5"
    />
    <!-- 0.2 -->
    <coin-template
      v-for="coin in change.cent20"
      :key="coin"
      :coinValue="0.20"
    />
    <!-- 0.10 -->
    <coin-template
      v-for="coin in change.cent10"
      :key="coin"
      :coinValue="0.10"
    />
    <!-- 0.5 -->
    <coin-template
      v-for="coin in change.cent05"
      :key="coin"
      :coinValue="0.05"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref, watch } from 'vue'
import CoinTemplate from '@/components/Coin.vue'
import CoinChangeInterface from '@/classes/interface/coinChangeInterface'

export default defineComponent({
  props: {
    totalChange: {
      type: Number,
      required: true
    }
  },
  components: {
    CoinTemplate
  },
  setup (props) {
    const coinsLeft: Ref<number> = ref(0)
    const change: Ref<CoinChangeInterface> = ref({
      cent05: 0,
      cent10: 0,
      cent20: 0,
      cent50: 0,
      rand1: 0,
      rand2: 0,
      rand5: 0
    })

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
      const modScaleFactor = 10000
      const remainderValue = ((coinsLeft.value * modScaleFactor) % (coinValue * modScaleFactor)) / modScaleFactor
      const totalChange = Math.ceil((coinsLeft.value - remainderValue) / coinValue)
      coinsLeft.value = remainderValue
      return totalChange
    }

    onMounted(() => {
      coinsLeft.value = props.totalChange
      calculateChange()
    })

    watch(() => props.totalChange, (newValue: number) => {
      console.log('🚀 ~ file: VendingMachineChange.vue ~ line 99 ~ watch ~ newValue', newValue)
      change.value = {
        cent05: 0,
        cent10: 0,
        cent20: 0,
        cent50: 0,
        rand1: 0,
        rand2: 0,
        rand5: 0
      }
      coinsLeft.value = newValue
      calculateChange()
    })

    return {
      change,
      // for testing purposes only
      perCoinChange,
      calculateChange,
      coinsLeft
    }
  }
})
</script>

<style scoped>

</style>
