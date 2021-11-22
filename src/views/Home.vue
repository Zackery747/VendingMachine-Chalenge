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
          <div class="dispenser-glass">Push</div>
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

    <!-- creator name -->
    <a
      href="https://github.com/Zackery747"
      class="creator-name"
      target="_blank"
    >
      created by <b>Zackery747</b>
    </a>
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
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='2000' height='800' preserveAspectRatio='none' viewBox='0 0 2000 800'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1040%26quot%3b)' fill='none'%3e%3crect width='2000' height='800' x='0' y='0' fill='rgba(255%2c 255%2c 255%2c 1)'%3e%3c/rect%3e%3cpath d='M911.04 56.64 a32.47 32.47 0 1 0 64.94 0 a32.47 32.47 0 1 0 -64.94 0z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M890.9 754.69L966.83 754.69L966.83 830.62L890.9 830.62z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M1780.7 30.09a68.84 68.84 0 1 0 106.38 87.41z' fill='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1413.77 681.01L1451.36 681.01L1451.36 708.55L1413.77 708.55z' stroke='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M1744.72 466.55a43.77 43.77 0 1 0-84.47 22.97z' stroke='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1901 682a50.77 50.77 0 1 0-100.74-12.66z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M255.26 224.82L328.03 224.82L328.03 291.59L255.26 291.59z' fill='rgba(133%2c 133%2c 133%2c 1)'%3e%3c/path%3e%3cpath d='M1380.26 300.53 a42 42 0 1 0 84 0 a42 42 0 1 0 -84 0z' stroke='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M833.09 653.26L864.25 653.26L864.25 684.42L833.09 684.42z' stroke='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M471.74 682.14L519.62 682.14L519.62 758.64L471.74 758.64z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M1965.28 49.75 a7.88 7.88 0 1 0 15.76 0 a7.88 7.88 0 1 0 -15.76 0z' fill='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1701.01 663.4a78.39 78.39 0 1 0 60.31 144.72z' stroke='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M290.34 150.25L309.61 150.25L309.61 169.52L290.34 169.52z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M94.44 632.83L154.02 632.83L154.02 692.41L94.44 692.41z' stroke='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M1537.58 546.41L1577.11 546.41L1577.11 585.94L1537.58 585.94z' stroke='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M86.02 474.02L131.85 474.02L131.85 525.45L86.02 525.45z' stroke='rgba(133%2c 133%2c 133%2c 1)'%3e%3c/path%3e%3cpath d='M1397.13 179.56L1466.23 179.56L1466.23 248.66L1397.13 248.66z' stroke='rgba(133%2c 133%2c 133%2c 1)'%3e%3c/path%3e%3cpath d='M866.86 613.64L906.49 613.64L906.49 688.91L866.86 688.91z' stroke='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M861.36 286.67L865.83 286.67L865.83 291.14L861.36 291.14z' stroke='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1207.6 395.26a55.7 55.7 0 1 0-46.58 101.19z' stroke='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1027.53 148.23L1029.64 148.23L1029.64 154.58L1027.53 154.58z' fill='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1486.94 583.33L1560.25 583.33L1560.25 656.64L1486.94 656.64z' fill='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1744.27 0.2L1792.74 0.2L1792.74 53.69L1744.27 53.69z' fill='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1245.21 113.47L1249.88 113.47L1249.88 118.14L1245.21 118.14z' stroke='rgba(173%2c 173%2c 173%2c 1)'%3e%3c/path%3e%3cpath d='M1382.58 722.01L1385.75 722.01L1385.75 725.18L1382.58 725.18z' stroke='rgba(133%2c 133%2c 133%2c 1)'%3e%3c/path%3e%3cpath d='M302.95 610.75a79.83 79.83 0 1 0 157.88-23.82z' stroke='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M534.9 485.59a79.54 79.54 0 1 0-18.91 157.95z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M1113.53 283.39a78.23 78.23 0 1 0-52.42-147.42z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M1706.36 380.16 a41.74 41.74 0 1 0 83.48 0 a41.74 41.74 0 1 0 -83.48 0z' fill='rgba(133%2c 133%2c 133%2c 1)'%3e%3c/path%3e%3cpath d='M1993.64 117.16L2003.9 117.16L2003.9 119.51L1993.64 119.51z' stroke='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3cpath d='M1983.79 304.8a11.18 11.18 0 1 0-11.8-18.99z' fill='rgba(133%2c 133%2c 133%2c 1)'%3e%3c/path%3e%3cpath d='M256.8 39.83L331.81 39.83L331.81 114.84L256.8 114.84z' fill='rgba(238%2c 238%2c 238%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1040'%3e%3crect width='2000' height='800' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
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

  display: grid;
  align-items: center;
  justify-content: center;

  font-size: 30px;
  font-family: "Righteous", Arial, Helvetica, sans-serif;
  color: rgb(255, 255, 255);
}

.creator-name {
  height: 40px;
  position: absolute;
  top: 10px;
  right: 50px;
  font-size: 20px;
  color: #000;
  text-decoration: none;
}
</style>
