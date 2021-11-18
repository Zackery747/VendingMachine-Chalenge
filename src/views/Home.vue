<template>
  <div class="vending-machine-wrapper">
    <vending-machine-layout>
      <template #items>
        <vending-machine-item
          v-for="(product, index) in products"
          :key="`product-${index}`"
          :product="product"
        />
      </template>
      <template #right>
        <vending-machine-controlls/>
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

export default defineComponent({
  name: 'Home',
  components: {
    VendingMachineLayout,
    VendingMachineItem,
    VendingMachineControlls
  },
  setup () {
    const products: Ref<ProductTypeInterface[]> = ref([
      {
        name: 'Breakfast',
        price: 20,
        number: 11,
        image: require('@/assets/products/1.png')
      },
      {
        name: 'Big Burger',
        price: 35,
        number: 12,
        image: require('@/assets/products/2.png')
      },
      {
        name: 'Burger',
        price: 30,
        number: 13,
        image: require('@/assets/products/3.png')
      },
      {
        name: 'Chicken',
        price: 25,
        number: 21,
        image: require('@/assets/products/4.png')
      },
      {
        name: 'Taco',
        price: 20,
        number: 22,
        image: require('@/assets/products/5.png')
      },
      {
        name: 'Coffee',
        price: 15,
        number: 23,
        image: require('@/assets/products/6.png')
      },
      {
        name: 'Donut',
        price: 10,
        number: 31,
        image: require('@/assets/products/7.png')
      },
      {
        name: 'Hot Dog',
        price: 15,
        number: 32,
        image: require('@/assets/products/8.png')
      },
      {
        name: 'Pizza',
        price: 20,
        number: 33,
        image: require('@/assets/products/9.png')
      }
    ])
    return {
      products
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
</style>
