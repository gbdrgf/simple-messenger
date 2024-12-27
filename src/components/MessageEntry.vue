<template>
  <div :class="['message', { 'message--self': isSelf }]">
    <div class="tooltip-container">
      <img
          :src="msg.from.thumbnail"
          class="message-thumbnail"
          :alt="msg.from.firstName"
          @mouseenter="showTooltip"
          @mouseleave="hideTooltip"
      />
      <div v-if="tooltip.visible" class="tooltip">{{ tooltip.text }}</div>
    </div>
    <div class="message-content">
      <p class="message-text">{{ msg.message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PropType } from 'vue';

const props = defineProps({
  msg: {
    type: Object as PropType<{ from: any; message: string }>,
    required: true,
  },
  isSelf: {
    type: Boolean,
    required: true,
  },
});

const tooltip = ref({ visible: false, text: '' });

const showTooltip = () => {
  tooltip.value = { visible: true, text: props.msg.from.firstName };
};

const hideTooltip = () => {
  tooltip.value = { visible: false, text: '' };
};
</script>

<style>
</style>
