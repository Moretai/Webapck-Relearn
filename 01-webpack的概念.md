##webpack大版本变化以及主要功能
> ###v1

* 编译打包
* 模块热更新(HMR)
* 代码分割（require.ensure）
* 文件处理

> ###v2

* Tree Shaking (去除未用到的代码)
* 动态import(import('xxxxx))

> ###v3

* Scope Hoisting (作用域提升)（打包后的代码减少闭包）
* Magic Comments(配合动态import使用)（指定动态加载的模块名字）

## Webpack 核心概念
> >###Entry
> 
> * 代码的入口
> * 打包的入口
> * 单个或多个


> >###Output
> 
> * 打包成的文件(bundle)
> * 自定义规则（[name] [hash:5] [chunkhash]）
> * 一个或多个
> 
> > ###Loader
> 
> * 资源变成js,供webpack处理
> * 编译相关 （babel-loader, ts-loader）
> * 样式相关 （style-loader, css-loader, less-loader, postcss-loader）
> * 文件相关 （file-loader, url-loader）
> 
> > ###Plugins
> 
> * 参与打包整个过程
> * 打包优化和压缩
> * 配置编译时的变量 等
> 
> **优化相关**
> 
> * CommonsChunkPlugin(提取多次使用的库)
> * UglifyjsWebpackPlugin (代码压缩,生成sourceMap)
> 
> **功能相关**
> 
> * ExtractTextWebpackPlugin(提取css)
> * HtmlWebpackPlugin
> * HotModuleReplacementPlugin(模块热更新)
> * CopyWebpackPlugin(copy一些文件）
> 
> 

##名词

###Chunk 代码块

###Bundle 打包出来的Bundle

###Module 模块