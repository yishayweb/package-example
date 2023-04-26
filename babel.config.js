module.exports = function (api) {
  api.cache(true);
  babelConfig = {
    presets: [
      '@babel/preset-env',
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
      '@babel/preset-typescript',
    ],
  };

  return babelConfig;
};
