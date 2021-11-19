import type { ExtractPropTypes } from 'vue';

export const buttonType = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const;

export const buttonSize = ['', 'large', 'medium', 'small', 'mini'] as const;

export const buttonProps = {
  type: {
    type: String,
    values: buttonType,
    default: 'default',
  },
  size: {
    type: String,
    values: buttonSize,
    default: 'default',
  },
  ghost: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
};

export type ButtonProps = ExtractPropTypes<typeof buttonProps>;
