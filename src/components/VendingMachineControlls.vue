<template>
  <!-- coin insert -->
  <vending-machine-coin-insert/>
  <!-- touch pad -->
  <vending-machine-touch-pad/>

  <!-- enter button -->

  <!-- change -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VendingMachineCoinInsert from './VendingMachineCoinInsert.vue'
import VendingMachineTouchPad from './VendingMachineTouchPad.vue'

export default defineComponent({
  components: {
    VendingMachineTouchPad,
    VendingMachineCoinInsert
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>

</style>
