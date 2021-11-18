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
  background: #FDFEFE;
  border: 10px solid #D7DBDD;
  box-sizing: border-box;
  border-radius: 10px;
}
</style>
