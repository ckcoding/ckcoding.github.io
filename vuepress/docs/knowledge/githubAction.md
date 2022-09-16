# Github Actions

## 打包编译上传vue项目
``` yaml
name: Build and Deploy #这个名字无所谓
on: 
  push:
    branches:
      - main # 你要拉取的分支名字
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest # 在什么上工作，ubuntu的最新系统上
    steps:
      - name: Checkout 🛎️ # 他只是个名字
        uses: actions/checkout@v3 # 用于处理仓库的，例如拉去代码，提交代码一类的操作https://github.com/actions/checkout
        with:
          persist-credentials: false # 表示操作结束否是否删除token，false为不删除，直接退出

      - name: Install and Build 🔧 # 使用npm来进行构建项目，也就是编译。
        run: | # yarn为安装依赖，也可以写作npm install，yarn build为打包，具体命令参考你的package.json只的命令
          yarn
          yarn build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@releases/v3 #第三方的构建工具,可以理解为上传代码的工具
        with:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }} # 获取你的私钥，注意ACCESS_TOKEN名字同你存放密钥的名字
          branch: build-page # 要上传的分支
          folder: dist # 你要传的目录

```