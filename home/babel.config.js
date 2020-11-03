module.exports = (api) => {
    api.cache(false);
    const presets = [
      ['@babel/preset-react'],
      [
        '@babel/preset-env',
        {
          corejs: { version: 3 },
          useBuiltIns: 'usage',
          targets: {
            edge: '17',
            firefox: '60',
            chrome: '67',
            safari: '11.1',
            ie: '11',
          },
        },
      ],
    ];
    const plugins = [
      ['@babel/plugin-syntax-dynamic-import'],
      ['@babel/plugin-proposal-object-rest-spread'],
      [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/core',
          libraryDirectory: 'esm',
          camel2DashComponentName: false,
        },
        'core',
      ],
      [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/icons',
          libraryDirectory: 'esm',
          camel2DashComponentName: false,
        },
        'icons',
      ],
    ];
    return {
      presets,
      plugins,
    };
  };
  