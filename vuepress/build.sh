#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
#set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd /dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m 'build'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:ckcoding/ckcoding.github.io/ main:Blogs-pages

cd -