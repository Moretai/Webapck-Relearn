## Babel

### basic use in webapck

```js
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env

// basic
module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                targets: {
                  // browsers: ['> 1%', 'last 2 versions','ie >= 10']
                  browsers: ['ie >= 10']
                  // browsers: ['chrome 61']
                }
              }]
            ],

          }
        },
        exclude: '/node_modules/'
      }
    ]
  }
  
// deeper
use: [
  {
    loader: 'babel-loader',
    query: {
      babelrc: false, //!!!
      presets: removeEmpty([
        ['env', { loose: true, modules: false }],
        'react',
        'stage-2',
        ifProduction('react-optimize')
      ]),
      plugins: [
        'syntax-dynamic-import',
        'transform-decorators-legacy',
        'react-hot-loader/babel',
        'transform-runtime'
      ]
    }
  },
  {
    loader: 'ts-loader'
  }
 ] 
```

### basic use in .babelrc

```js
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["> 1%", "last 2 versions","ie >= 10"]
      }
    }]
  ],
  "plugins": ["@babel/transform-runtime"]
}
```

## difference in babel-polyfill and babel-plugin-transform-runtime

```js
// 在入口处引入
1. webpack entry
2. app 的import 第一个
babel-polyfill 全局污染 适合应用开发

yarn add @babel/runtime
babel-plugin-transform-runtime 局部垫片 适合框架开发
```