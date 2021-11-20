<template>
  <div
    class="coin no-select "
    :style='`
      background: ${getCoin.backgroundColor};
      border: 5px solid ${getCoin.borderColor}
    `'
  >
    {{ getCoin.name }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref } from 'vue'
import CoinTypeInterface from '@/classes/interface/coinTypeInterface'

export default defineComponent({
  props: {
    coinValue: {
      type: Number,
      required: true
    }
  },
  setup (props) {
    const coins: Ref<CoinTypeInterface[]> = ref([
      {
        name: '5c',
        value: 0.05,
        backgroundColor: '#F39C12',
        borderColor: '#D68910'
      },
      {
        name: '10c',
        value: 0.10,
        backgroundColor: '#F39C12',
        borderColor: '#D68910'
      },
      {
        name: '20c',
        value: 0.20,
        backgroundColor: '#F39C12',
        borderColor: '#D68910'
      },
      {
        name: '50c',
        value: 0.50,
        backgroundColor: '#F39C12',
        borderColor: '#D68910'
      },
      {
        name: 'R1',
        value: 1,
        backgroundColor: '#CACFD2',
        borderColor: '#A6ACAF'
      },
      {
        name: 'R2',
        value: 2,
        backgroundColor: '#CACFD2',
        borderColor: '#A6ACAF'
      },
      {
        name: 'R5',
        value: 5,
        backgroundColor: '#F39C12',
        borderColor: '#A6ACAF'
      }
    ])

    const getCoin = computed(() => coins.value.filter((coin: CoinTypeInterface) => coin.value === props.coinValue)[0])

    return {
      getCoin
    }
  }
})
</script>

<style scoped>
.coin {
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 60px;
  display: inline-grid;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  cursor: pointer;
}
</style>
