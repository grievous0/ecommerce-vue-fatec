<template>
  <NavBar />
  <Transition>
    <router-view></router-view>
  </Transition>
  <CompFooter />
</template>

<script>
import NavBar from "@/components/onAppVue/NavBar.vue";
import CompFooter from "@/components/onAppVue/CompFooter.vue";

export default {
  components: {
    NavBar,
    CompFooter,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
@keyframes heartbeat {
  from {
    transform: scale(1);
    transform-origin: center center;
    animation-timing-function: ease-out;
  }
  10% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  17% {
    transform: scale(0.98);
    animation-timing-function: ease-out;
  }
  33% {
    transform: scale(0.95);
    animation-timing-function: ease-in;
  }
  45% {
    transform: scale(1);
    animation-timing-function: ease-out;
  }
}
:root {
  --carbon: #262626;
  --carbonLight: #383838;
  --grey: #383838;
  --black: #000000;
  --blue: #FAB23D;
  --blueLight: #e8f0fe;
  --pink: #ca2166;
  --green: #FFC812;
  --yellow: #fed761;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
