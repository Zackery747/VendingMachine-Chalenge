<template>
  <!-- coin insert -->
  <vending-machine-coin-insert v-model="totalCoins"/>
  <!-- touch pad -->
  <vending-machine-touch-pad v-model="selectedNumber"/>
  <!-- enter button -->
  <div class="enter-button">
    Select
  </div>
  <!-- change -->
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import VendingMachineCoinInsert from './VendingMachineCoinInsert.vue'
import VendingMachineTouchPad from './VendingMachineTouchPad.vue'

export default defineComponent({
  components: {
    VendingMachineTouchPad,
    VendingMachineCoinInsert
  },
  setup () {
    const totalCoins: Ref<number> = ref(0)
    const selectedNumber: Ref<string> = ref('')

    return {
      totalCoins,
      selectedNumber
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
  cursor: pointer;

  display: grid;
  align-items: center;
  justify-content: center;
}

.enter-button:hover {
  font-size: 28px;
}
</style>
