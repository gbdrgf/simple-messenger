<template>
  <div class="chat-window">>
    <Conversation :messages="messages" :current-user="currentUser" />
    <ComposeSection v-model="inputValue" @submit="handleSendMessage" />
    <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useMessagesStore } from '@/store/messages';
import { useUsersStore } from '@/store/users';
import Conversation from './Conversation.vue';
import ComposeSection from './ComposeSection.vue';

const messagesStore = useMessagesStore();
const userStore = useUsersStore();

const messages = computed(() => messagesStore.messages);
const currentUser = computed(() => userStore.currentUser);

const inputValue = ref('');
const errorMessage = ref('');

const handleSendMessage = async (content: string) => {
  const tempMessage = {
    from: currentUser.value,
    message: content,
    date: new Date().toISOString(),
    id: Date.now(),
  };

  messagesStore.messages.push(tempMessage);
  errorMessage.value = '';

  try {
    await messagesStore.sendNewMessage(content, currentUser.value);
  } catch (error) {
    console.error('Failed to send message:', error);
    errorMessage.value = 'Failed to send the message. Please try again.';
    inputValue.value = content;
  } finally {
    messagesStore.messages = messagesStore.messages.filter((msg) => msg.id !== tempMessage.id);
  }
};

onMounted(async () => {
  try {
    await userStore.loadCurrentUser();
    await messagesStore.loadMessages();
  } catch (error) {
    console.error('Error loading data:', error);
  }
});
</script>

<style>
</style>
