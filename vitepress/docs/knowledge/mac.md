永久关闭Mac自动生成.ds_store文件
```bash
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```
恢复默认设置并重新启用 .DS_Store 文件自动生成
```bash
defaults delete com.apple.desktopservices DSDontWriteNetworkStores
```

# 永久屏蔽系统更新
如果想永久地阻止更新，可以遵循以下步骤：
使用终端命令

开启或关闭自动更新：

打开“终端”，输入以下命令来关闭自动软件更新的检查功能：

```bash
sudo softwareupdate --schedule off
```

关闭后系统不再自动检查更新，但还能手动更新。

还可以通过以下命令，设置系统不自动下载和安装更新：

```bash
sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate AutomaticDownload -boolean FALSE
sudo defaults write /Library/Preferences/com.apple.commerce AutoUpdate -bool FALSE
```

回到原始设置，允许自动更新，可以执行：

```bash
sudo softwareupdate --schedule on
sudo defaults write /Library/Preferences/com.apple.SoftwareUpdate AutomaticDownload -boolean TRUE
sudo defaults write /Library/Preferences/com.apple.commerce AutoUpdate -bool TRUE
```