<template>
  <div class="compose-section">
    <textarea
        v-model="localInput"
        @input="adjustTextareaHeight"
        placeholder="Type your message here..."
        ref="textarea"
    ></textarea>
    <button @click="submitMessage">Send</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue', 'submit']);

const localInput = ref(props.modelValue);
const textarea = ref<HTMLTextAreaElement | null>(null);

watch(localInput, (value) => {
  emit('update:modelValue', value);
});

const adjustTextareaHeight = () => {
  if (textarea.value) {
    textarea.value.style.height = 'auto';
    const maxHeight = 120;
    const newHeight = Math.min(textarea.value.scrollHeight, maxHeight);
    textarea.value.style.height = `${newHeight}px`;
    textarea.value.style.overflowY = textarea.value.scrollHeight > maxHeight ? 'auto' : 'hidden';
  }
};

const submitMessage = () => {
  if (!localInput.value.trim()) return;
  emit('submit', localInput.value.trim());
  localInput.value = '';
};
</script>

<style>
</style>
