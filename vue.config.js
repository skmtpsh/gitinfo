
{
  mode: 'production',
  context: 'D:\\mPcApp\\gitYLBDoc-YD',
  devtool: false,
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
    __dirname: true,
    __filename: true
  },
  output: {
    path: 'D:\\mPcApp\\gitYLBDoc-YD\\dist',
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    symlinks: true,
    alias: {
      '@': 'D:\\mPcApp\\gitYLBDoc-YD\\src',
      vue$: 'vue/dist/vue.runtime.esm.js',
      api: 'D:\\mPcApp\\gitYLBDoc-YD\\src\\api',
      assets: 'D:\\mPcApp\\gitYLBDoc-YD\\src\\assets',
      components: 'D:\\mPcApp\\gitYLBDoc-YD\\src\\components',
      'static': 'D:\\mPcApp\\gitYLBDoc-YD\\src\\static'
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'D:\\mPcApp\\gitYLBDoc-YD\\node_modules',
      'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\@vue\\cli-plugin-eslint\\node_modules',
      'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'node_modules',
      'D:\\mPcApp\\gitYLBDoc-YD\\node_modules',
      'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '016f1cb6'
            }
          },
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                preserveWhitespace: false
              },
              cacheDirectory: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\.cache\\vue-loader',
              cacheIdentifier: '016f1cb6'
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|svg)(\?.*)?$/,
        exclude: [
          'D:\\mPcApp\\gitYLBDoc-YD\\src\\assets\\svg-icons\\icons'
        ],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        include: [
          'D:\\mPcApp\\gitYLBDoc-YD\\src\\assets\\svg-icons\\icons'
        ],
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'sh-icon-[name]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  data: '@import \'~@/assets/style/public.scss\';'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  data: '@import \'~@/assets/style/public.scss\';'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  data: '@import \'~@/assets/style/public.scss\';'
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  data: '@import \'~@/assets/style/public.scss\';'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  data: '@import \'~@/assets/style/public.scss\';',
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  data: '@import \'~@/assets/style/public.scss\';',
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  data: '@import \'~@/assets/style/public.scss\';',
                  indentedSyntax: true
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: false,
                  implementation: {
                    run_: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    render: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    renderSync: function(){return b(c,Array.prototype.slice.apply(arguments))},
                    info: 'dart-sass\t1.22.3\t(Sass Compiler)\t[Dart]\ndart2js\t2.4.0\t(Dart Compiler)\t[Dart]',
                    types: {
                      Boolean: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Color: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      List: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Map: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Null: function(){return b(c,Array.prototype.slice.apply(arguments))},
                      Number: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      String: function(){return b(c,this,Array.prototype.slice.apply(arguments))},
                      Error: function Error() { [native code] }
                    }
                  },
                  data: '@import \'~@/assets/style/public.scss\';',
                  indentedSyntax: true
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: true,
                  localIdentName: '[name]_[local]_[hash:base64:5]'
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              {
                loader: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\mini-css-extract-plugin\\dist\\loader.js',
                options: {
                  hmr: false,
                  publicPath: '../'
                }
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ },
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '591ab172'
            }
          },
          {
            loader: 'thread-loader'
          },
          {
            loader: 'babel-loader'
          }
        ]
      },
      /* config.module.rule('eslint') */
      {
        enforce: 'pre',
        test: /\.(vue|(j|t)sx?)$/,
        exclude: [
          /node_modules/,
          'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\@vue\\cli-service\\lib'
        ],
        use: [
          {
            loader: 'eslint-loader',
            options: {
              extensions: [
                '.js',
                '.jsx',
                '.vue'
              ],
              cache: true,
              cacheIdentifier: '4e9ad48d',
              emitWarning: true,
              emitError: false,
              eslintPath: 'D:\\mPcApp\\gitYLBDoc-YD\\node_modules\\eslint',
              formatter: function () { /* omitted long function */ }
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              drop_console: true,
              drop_debugger: true
            }
          }
        }
      }
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          VUE_APP_BASE_API_V1: '"http://api.prod.com"',
          VUE_APP_BUILD_TIME: '"2019-9-24 09:56:33"',
          VUE_APP_CLI_UI_URL: '""',
          VUE_APP_ENV: '"PROD"',
          VUE_APP_TITLE: '"易来宝"',
          VUE_APP_VERSION: '"1.1.0"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('extract-css') */
    new MiniCssExtractPlugin(
      {
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      }
    ),
    /* config.plugin('optimize-css') */
    new OptimizeCssnanoPlugin(
      {
        sourceMap: false,
        cssnanoOptions: {
          preset: [
            'default',
            {
              mergeLonghand: false,
              cssDeclarationSorter: false
            }
          ]
        }
      }
    ),
    /* config.plugin('hash-module-ids') */
    new HashedModuleIdsPlugin(
      {
        hashDigest: 'hex'
      }
    ),
    /* config.plugin('named-chunks') */
    new NamedChunksPlugin(
      function () { /* omitted long function */ }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        templateParameters: function () { /* omitted long function */ },
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          collapseBooleanAttributes: true,
          removeScriptTypeAttributes: true
        },
        template: 'D:\\mPcApp\\gitYLBDoc-YD\\public\\index.html',
        cdn: {
          css: [
            'https://cdn.jsdelivr.net/npm/vant@2.0/lib/index.css',
            'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css'
          ],
          js: [
            'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
            'https://cdn.jsdelivr.net/npm/vant@2.0/lib/vant.min.js',
            'https://unpkg.com/vue-router@3.0.7/dist/vue-router.min.js',
            'https://unpkg.com/vuex@3.1.1/dist/vuex.min.js',
            'https://unpkg.com/axios@0.19.0/dist/axios.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js'
          ]
        }
      }
    ),
    /* config.plugin('copy') */
    new CopyWebpackPlugin(
      [
        {
          from: 'D:\\mPcApp\\gitYLBDoc-YD\\public',
          to: 'D:\\mPcApp\\gitYLBDoc-YD\\dist',
          toType: 'dir',
          ignore: [
            '.DS_Store'
          ]
        }
      ]
    ),
    {
      options: {
        test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
        include: undefined,
        exclude: undefined,
        cache: false,
        algorithm: function () { /* omitted long function */ },
        compressionOptions: {
          level: 9
        },
        filename: '[path].gz[query]',
        threshold: 10240,
        minRatio: 0.8,
        deleteOriginalAssets: false
      }
    }
  ],
  entry: {
    app: [
      './src/main.js'
    ]
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
    vuex: 'Vuex',
    axios: 'axios',
    vant: 'vant'
  }
}
