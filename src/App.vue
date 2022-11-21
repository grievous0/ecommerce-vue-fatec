<template>
  <section id="App">
    <main>
      <HomePage />

      <router-view></router-view>
    </main>
  </section>
</template>

<script type="text/javascript">
"use strict";
import HomePage from './components/HomePage.vue';

export default {
  "name": 'App',
  "components": {
    "HomePage": HomePage,
  },
  "data": function() {
    return {}
  },
};
  
</script>
<style scoped>

</style>
