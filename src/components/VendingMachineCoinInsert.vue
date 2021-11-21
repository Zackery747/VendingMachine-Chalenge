<template>
  <div class='coin-insert-wrapper'>
    <!-- total -->
    <div class="total-coins">
      Total: {{ totalCoin.toFixed(2) }}
    </div>

    <!-- coins popup -->
    <el-popover
      placement="bottom"
      :width="200"
      trigger="click"
    >
    <template #reference>
      <div class="coin-slot"></div>
    </template>
    <!-- coins -->
    <div>
      <coin-template :coinValue="0.05" @click="insertCoin(0.05)" />
      <coin-template :coinValue="0.10" @click="insertCoin(0.10)" />
      <coin-template :coinValue="0.20" @click="insertCoin(0.20)" />
      <coin-template :coinValue="0.50" @click="insertCoin(0.50)" />
      <coin-template :coinValue="1" @click="insertCoin(1)" />
      <coin-template :coinValue="2" @click="insertCoin(2)" />
      <coin-template :coinValue="5" @click="insertCoin(5)" />
    </div>
    </el-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'
import CoinTypeInterface from '@/classes/interface/coinTypeInterface'
import CoinTemplate from '@/components/Coin.vue'

export default defineComponent({
  props: {
    modelValue: {
      type: Number,
      required: true
    }
  },
  emits: ['update:modelValue'],
  components: {
    CoinTemplate
  },
  setup (props, { emit }) {
    const totalCoin: Ref<number> = ref(props.modelValue)

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

    function insertCoin (value: number) {
      totalCoin.value += value
      emit('update:modelValue', totalCoin.value)
    }

    watch(() => props.modelValue, (newValue: number) => {
      totalCoin.value = newValue
    })

    return {
      totalCoin,
      insertCoin,
      coins
    }
  }
})
</script>

<style scoped>
.coin-insert-wrapper {
  width: 100%;
  height: 120px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.coin-slot {
  width: 10px;
  height: 70px;
  background: #000;
  margin: auto;
  border-radius: 10px;
  margin-top: 10px;
}

.coin {
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  border-radius: 80px;
  display: inline-grid;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin: 10px;
  cursor: pointer;
}

.total-coins {
  width: 90%;
  height: 35px;
  margin-left: 5%;
  background: #fff;
  border: 2px solid #000;
  color: #000;
  display: grid;
  align-items: center;
  justify-content: center;
  font-family: "Saira Stencil One", Arial, Helvetica, sans-serif;
  font-size: 20px;
}
</style>
