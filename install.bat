@echo off
echo 设置npm国内源为淘宝源...
call npm config set registry https://registry.npmmirror.com/
echo 正在安装依赖...
call npm install
echo 安装完成！
pause