<template>
  <div class="layout">
    <div class="layout-left-section">
      <!-- vending machine items -->
      <vending-machine-item-layout>
        <slot name="items"/>
      </vending-machine-item-layout>
    </div>
    <div class="layout-right-section">
      <slot name="right"/>
    </div>

    <!-- vending machine bottom parts -->
    <div class="left-foot"></div>
    <div class="right-foot"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VendingMachineItemLayout from './VendingMachineItemLayout.vue'

export default defineComponent({
  components: {
    VendingMachineItemLayout
  },
  setup () {
    return {
    }
  }
})
</script>

<style scoped>
.layout {
  width: 500px;
  height: 600px;
  background: #273746;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 10px;
  position: relative;
  box-shadow: 10px 20px 5px grey;
}

.layout-left-section {
  display: inline-block;
  vertical-align: top;
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  padding: 5px;
}

.layout-right-section {
  display: inline-block;
  vertical-align: top;
  width: 40%;
  height: 100%;
  background: #E74C3C;
  border-radius: 10px;
}

.left-foot {
  width: 60px;
  height: 40px;
  background: #1C2833;
  position: absolute;
  bottom: -40px;
  left: 10px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}

.right-foot {
  width: 60px;
  height: 40px;
  background: #1C2833;
  position: absolute;
  bottom: -40px;
  right: 10px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
}
</style>
