<template>
  <div id="app">
    <ChatWindow />
  </div>
</template>

<script>
import ChatWindow from './components/ChatWindow.vue';

export default {
  name: 'App',
  components: {
    ChatWindow,
  },
};
</script>

<style>
@import './assets/main.css';
</style>