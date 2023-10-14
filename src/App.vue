<template>
  <HeaderComponents/>
  <router-view/>
  <FooterComponents/>
  </template>
  
  <script>
import FooterComponents from './components/FooterComponents.vue';
import HeaderComponents from './components/HeaderComponents.vue';
import router from './router';

  
 
  
  
  export default {
    name: 'App',
    components: {
    HeaderComponents,
    router,
    FooterComponents
}
  }
  </script>
  
  <style lang="scss">
  #app {
    
  }
  </style>
  