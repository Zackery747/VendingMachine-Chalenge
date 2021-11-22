import ProductTypeInterface from '@/classes/interface/productTypeInterface'

const products: ProductTypeInterface[] = [
  {
    name: 'Breakfast',
    price: 20,
    number: '11',
    image: require('@/assets/products/1.png')
  },
  {
    name: 'Big Burger',
    price: 35,
    number: '12',
    image: require('@/assets/products/2.png')
  },
  {
    name: 'Burger',
    price: 30,
    number: '13',
    image: require('@/assets/products/3.png')
  },
  {
    name: 'Chicken',
    price: 25,
    number: '21',
    image: require('@/assets/products/4.png')
  },
  {
    name: 'Taco',
    price: 20,
    number: '22',
    image: require('@/assets/products/5.png')
  },
  {
    name: 'Coffee',
    price: 15,
    number: '23',
    image: require('@/assets/products/6.png')
  },
  {
    name: 'Donut',
    price: 10,
    number: '31',
    image: require('@/assets/products/7.png')
  },
  {
    name: 'Hot Dog',
    price: 15,
    number: '32',
    image: require('@/assets/products/8.png')
  },
  {
    name: 'Pizza',
    price: 20,
    number: '33',
    image: require('@/assets/products/9.png')
  }
]

export default products
