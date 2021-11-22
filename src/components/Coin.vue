<template>
  <div
    v-if="getCoin"
    class="coin no-select "
    :style='cssStyle'
  >
    {{ getCoin.name }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, ref } from 'vue'
import CoinTypeInterface from '@/classes/interface/coinTypeInterface'
import CoinsData from '@/data/coins'

export default defineComponent({
  props: {
    coinValue: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const coins: Ref<CoinTypeInterface[]> = ref(CoinsData)

    const getCoin = computed(() => coins.value.filter(
      (coin: CoinTypeInterface) => coin.value === props.coinValue)[0]
    )

    const cssStyle = computed(() =>
      `
        background: ${getCoin.value.backgroundColor};
        border-bottom: 5px solid ${getCoin.value.borderColor1};
        border-right: 5px solid ${getCoin.value.borderColor1};
        border-left: 5px solid ${getCoin.value.borderColor2};
        border-top: 5px solid ${getCoin.value.borderColor2};
      `
    )

    return {
      getCoin,
      cssStyle
    }
  }
})
</script>

<style scoped>
.coin {
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 50%;
  display: inline-grid;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  cursor: pointer;
  color: #000;
}
</style>
