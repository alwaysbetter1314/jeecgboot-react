# 简介
使用jeecgboot后台管理端脚手架，练习时长快两年半，但是官方只有vue2、vue3的前端，并没有react的前端。故顺手做一个，顺便学学redux的用法
- 对应jeecgboot 后端 3.2版本
- nodejs >=12

## 额外引入的库
> 以create-react-app项目结构作为基础，但是创建的项目难以自定义配置， 而eject之后看着太乱了，所以引入:
- craco: 提供类似vue.config.js那样修改webapck配置的功能，可以替代下面三库。
- ~~react-app-rewired: 实现配置文件挂载。~~
- ~~customize-cra: 编写config-overrides.js来覆盖webpack的配置~~
- ~~cross-env: 可以指定端口来开启dev模式,有种shell那味儿。~~
## 致谢
从零开始太麻烦了，灵感源于这位使用antd做管理端的作者：https://github.com/NLRX-WJC/react-antd-admin-template/blob/master/package.json
不过这哥们用的mock做的后端数据，咱给对接个实际能用的。
