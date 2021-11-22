<template>
  <div class="item-layout">
    <slot/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  }
})
</script>

<style scoped>
.item-layout {
  width: 95%;
  height: auto;
  background: #fff;
  border: 8px solid #d3d3d3;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
}

</style>
