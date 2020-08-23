# react-ts-cli 脚手架

#### 全局安装脚手架

##### mac用户
sudo npm i -g creat-react-ts
##### windows 用户
npm i -g creat-react-ts

#### 创建项目

creat-react-ts init projectName

#### 下载依赖

npm i

#### 启动服务

npm start

# 项目结构

├──Readme.md  
├── mock // mock 数据存放  
├── src  
│ ├── components // 组件  
│ ├── models // redux  
│ ├── pages // 页面  
│ ├── index.js // 服务配置  
│ ├── services // 后台接口请求  
│ ├── router.js // 路由  
│ └── utils // 公共方法  
├── global.d.ts // ts  
├── .roadhogrc.js // dva 配置  
├── .webpackrc.js // webpack 相关配置  
├── node_modules  
├── package.json  
├── tsconfig.json // ts 配置  
├── tslint.json // ts 校验配置  
###后续有时间会对项目工程做解释和问题点的解决方案都会形成文档

#### 工具集成的创建项目工具

creattemplate creat <pageName(文件夹名字)>

#### 会一次创建tsx文件，less文件，model文件，service文件，URL文件，可根据自己需要选择创建

#### 如果单独使用可以自行安装
##### mac用户
sudo npm i -g creattemplate
##### windows 用户
npm i -g creattemplate
