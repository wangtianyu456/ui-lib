<template>
  <button
    :class="[
      'u-button',
      type ? `u-button--${type}` : '',
      size ? `u-button--${size}` : '',
      {
        'is-loading': loading,
        'is-disabled': disabled,
      },
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { buttonProps } from './button';

export default defineComponent({
  name: 'UButton',
  props: buttonProps,
  emits: ['click'],
  setup(props, { emit }) {
    const handleClick = (event: MouseEvent) => {
      if (props.disabled || props.loading) return;
      emit('click', event);
    };
    return { handleClick };
  },
});
</script>
