<template>
  <div class="item">
    <div class="item-image-wrapper">
      <el-image
        class="item-image"
        :src="product.image"
        fit="contain"
      />
    </div>
    <div class="item-details">
      <!-- <div class="item-details-number">{{ product.number }}</div>
      <div class="item-details-price">R{{ product.price }}</div> -->
      <span><b>{{ product.number }}</b> - R{{ product.price }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import ProductTypeInterface from '@/classes/interface/productTypeInterface'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<ProductTypeInterface>,
      required: true
    }
  },
  setup () {
    return {}
  }
})
</script>

<style scoped>
.item {
  display: inline-block;
  vertical-align: top;
  width: calc(33.3% - 10px);
  height: 100px;
  margin: 5px;
}

.item-image-wrapper {
  height: 75px;
  width: 70%;
  margin: auto;
}

.item-image {
  height: 100%;
  width: auto;
}

.item-details {
  height: 25px;
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;

  display: grid;
  align-items: center;
  justify-content: center;
}

.item-details-number {
  display: inline-grid;
  height: 100%;
  width: 50%;

  align-items: center;
  justify-content: center;
}

.item-details-price {
  display: inline-grid;
  height: 100%;
  width: 50%;

  align-items: center;
  justify-content: center;
}
</style>
