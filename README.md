# 简介
使用jeecgboot后台管理端脚手架，练习时长快两年半，但是官方只有vue2、vue3的前端，并没有react的前端。所有顺手做一个，顺便学学redux的用法
- 对应后端 3.2版本

## 额外引入的库
> 由于creat-react-app创建的项目难以自定义配置， 而eject之后看着太乱了，所以引入:
- react-app-rewired: 实现配置文件挂载
- customize-cra: 编写config-overrides.js来覆盖webpack的配置
- cross-env: 可以指定端口来开启dev模式,有种shell那味儿：`cross-env PORT=3000 react-app-rewired start`

## 致谢
从零开始太麻烦了，灵感源于这位使用antd做管理端的作者：https://github.com/NLRX-WJC/react-antd-admin-template/blob/master/package.json
