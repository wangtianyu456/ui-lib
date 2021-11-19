// 放置的是组件的pros，以及一些公共方法
import { ExtractPropTypes } from 'vue';

export const iconProps = {
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
};

export type IconProps = ExtractPropTypes<typeof iconProps>;
