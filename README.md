# if-wxy-cli

## 介绍

可自定义git仓库的脚手架

## 安装
```
npm install -g if-wxy-cli
```

## 命令

| 命令                                          | 作用                                   |
| ------------------------------------------- | ------------------------------------ |
| `wxy create [template-name] [project-name]` | 创建project-name项目并采用template-name模板   |
| `wxy add`                                   | 新增一个模板，需要输入name、url、branch（默认master） |
| `wxy list`                                  | 查看所有模板                               |
| `wxy delete`或`wxy delete [template-name]`   | 删除模板                                 |
| `wxy delete all`                            | 删除所有模板                               |

### wxy add

```
 wxy add 
? 请输入模板名称 test
? 请输入模板地址 url     
? 请输入分支(默认master) develop

✔ Add a template successfully!

The latest templateList is:

┌─────────┬────────┬───────┬───────────┐
│ (index) │  name  │  url  │  branch   │
├─────────┼────────┼───────┼───────────┤
│    0    │ 'test' │ 'url' │ 'develop' │
└─────────┴────────┴───────┴───────────┘
```

### wxy list

```
wxy list
┌─────────┬────────┬───────┬───────────┐
│ (index) │  name  │  url  │  branch   │
├─────────┼────────┼───────┼───────────┤
│    0    │ 'test' │ 'url' │ 'develop' │
└─────────┴────────┴───────┴───────────┘
```

### wxy delete

```
wxy delete  
┌─────────┬────────┬───────┬───────────┐
│ (index) │  name  │  url  │  branch   │
├─────────┼────────┼───────┼───────────┤
│    0    │ 'test' │ 'url' │ 'develop' │
└─────────┴────────┴───────┴───────────┘
? 请输入要删除的模板名称 test


✔ Deleted successfully!      

Cleared all templates  

# 删除指定模板
wxy delete test


✔ Deleted successfully!

The latest templateList is: 

┌─────────┬─────────┬───────┬──────────┐
│ (index) │  name   │  url  │  branch  │
├─────────┼─────────┼───────┼──────────┤
│    0    │ 'test2' │ 'url' │ 'master' │
└─────────┴─────────┴───────┴──────────┘

# 删除所有模板
wxy delete all 


✔ Deleted successfully!

Cleared all templates  
```

### wxy create

```
wxy create test test

 Start generating... 

✔ Downloading...
✔ Generation completed!

 To get started

    cd test
```