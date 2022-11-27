<template>
  <section class="aboutUs">
    <h1 v-for="i in products" :key="i" class="title">{{this.products[i]}}</h1>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AboutUs',

  data() {
    return {
      products: {},
      posts
    }
  },
  created() {
     this.getProducts();
   },
   methods: {
    async getProducts() {
       axios
         .get("https://fakestoreapi.com/products")
         .then((res) => {
            this.products = res.data;
            console.log(this.products);
         })
         .catch((error) => {
           console.log(error);
         });
     },
   },
   async getProducts() {
      try {
        const response = await this.$http.get(
          "https://fakestoreapi.com/products"
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: var(--carbon);
}
</style>
