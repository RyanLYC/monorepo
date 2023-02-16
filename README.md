## monorepo介绍
`Monorepo` 中文：单体仓库 (单个仓库)。就是单个项目仓库 (repository)，其中包含多个开发项目 project (模块 module，或包 package)。虽然这些 project 也许是相关联的，但它们通常在逻辑上相互独立，并被不同的团队负责编写，运行。

## monorepo操作
1. 安装pnpm 创建项目
```javascript
  npm install -g pnpm
  // 创建项目文件夹 monorepo 
  // cd monorepo # 进入文件夹
  //初始化pnpm
  pnpm init
  // 创建 pnpm-workspace.yaml文件
  // https://pnpm.io/zh/pnpm-workspace_yaml 
```
2. pnpm-workspace.yaml文件
```javascript
packages:
  # all packages in direct subdirs of packages/
  - "packages/*"
  # all packages in subdirs of components/
  - "components/**"
  # common api
  - "api/**"

```
3. 创建公共api文件夹
```shell
  cd api 

  pnpm init

  pnpm install axios
```
  修改`package.json`
```javascript
"name": "@zy/api",
"private": true,
```
4. 在packages下创建对应项目
```shell
  cd packages 

  npx create-vite

  cd vite-project

  # 使用pnpm安装依赖

  # 删除多余的 文件
```
5. 安装公共api的库
```shell
  pnpm install @zy/api
```
6. 使用axios公共api
7. 封装公共组件(具体看代码)