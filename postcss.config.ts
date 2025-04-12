import cssnano from 'cssnano';
import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';
import postcssCustomMedia from 'postcss-custom-media';

export default {
  plugins: [
    cssnano({
      preset: 'default',
    }),
    postcssPresetEnv({
      stage: 1,
      features: {
        'custom-media-queries': true,
        'nesting-rules': true,
      },
    }),
    autoprefixer,
    postcssCustomMedia({ preserve: true }),
  ],
};
