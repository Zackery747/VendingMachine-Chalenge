<template>
  <div class="vending-machine-wrapper">
    <vending-machine-layout>
      <template #items>
        <!-- items -->
        <vending-machine-item
          v-for="(product, index) in products"
          :key="`product-${index}`"
          :product="product"
        />

        <!-- dispenser -->
        <div class="dispenser">
          <product v-if="productToDispense" :image="productToDispense?.image || ''"/>
          <div class="dispenser-glass"/>
        </div>
      </template>

      <template #right>
        <!-- controls -->
        <vending-machine-controlls
          :products="products"
          @dispense-product="dispenseProduct"
        />
      </template>
    </vending-machine-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'
import ProductTypeInterface from '@/classes/interface/productTypeInterface'
import VendingMachineLayout from '@/components/VendingMachineLayout.vue'
import VendingMachineItem from '@/components/VendingMachineItem.vue'
import VendingMachineControlls from '@/components/VendingMachineControlls.vue'
import Product from '@/components/Product.vue'
import ProductData from '@/data/products'

export default defineComponent({
  name: 'Home',
  components: {
    VendingMachineLayout,
    VendingMachineItem,
    VendingMachineControlls,
    Product
  },
  setup () {
    const products: Ref<ProductTypeInterface[]> = ref(ProductData)
    const productToDispense: Ref<ProductTypeInterface | null> = ref(null)

    function dispenseProduct (product: ProductTypeInterface) {
      productToDispense.value = product
      setTimeout(function () {
        productToDispense.value = null
      }, 2000)
    }

    return {
      products,
      productToDispense,
      dispenseProduct
    }
  }
})
</script>

<style scoped>
.vending-machine-wrapper {
  background: #f7f8f9;
  height: 100vh;
  width: 100vw;
}

.dispenser {
  width: 250px;
  height: 100px;
  background: rgba(37, 37, 37, 0.5);
  border: 2px solid #fff;
  margin-top: 25px;
  border-radius: 10px;
  position: absolute;
}

.dispenser-glass {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(37, 37, 37, 0.5);
  top: 0px;
  left: 0px;
}
</style>
