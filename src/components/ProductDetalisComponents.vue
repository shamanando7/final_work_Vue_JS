<template>
    <div>
      
      <ul>
        <li v-for="product in products" :key="product.id">
          <h2>{{ product.name }}</h2>
          <p>{{ formatPrice(product.price) }}</p>
          <p v-if="product.available" style="color: greenyellow;">Available</p>
          <p v-else style="color: red;">Out of stock</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductDetails",
    data() {
      return {
        products: [
          { id: 1, name: "Mouse Xiaomi2", price: 20, available: true },
          { id: 2, name: "Sugar 1kg", price: 0.75, available: false },
          { id: 3, name: "Smol Nord 4", price: 32, available: true },
        ],
      };
    },
    computed: {
      formatPrice() {
        return function(price) {
          return "$" + price.toFixed(2);
        };
      },
    },
  };
  </script>

<style scoped>

</style>