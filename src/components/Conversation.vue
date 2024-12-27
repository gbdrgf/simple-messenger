<template>
  <div class="messages">
    <MessageEntry
        v-for="(message, index) in props.messages"
        :key="index"
        :msg="message"
        :is-self="message.from.id === currentUser?.id"
    />
  </div>
</template>

<script setup lang="ts">
import MessageEntry from './MessageEntry.vue';
import { PropType } from 'vue';

const props = defineProps({
  messages: {
    type: Array as PropType<any[]>,
    required: true,
  },
  currentUser: {
    type: Object as PropType<{ id: number; firstName: string; lastName: string; thumbnail: string }>,
    required: true,
  },
});
</script>

<style>
</style>
