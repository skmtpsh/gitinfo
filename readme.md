# 项目说明文档
1. mkdown
  - mkdown操作
  [mkdown](https://www.runoob.com/markdown/md-lists.html)

2. vi操作
   - vi操作

  [vi](https://www.cnblogs.com/sriba/p/8043471.html)
  [vi](http://blog.sina.com.cn/s/blog_6d09b5750100vx3u.html)
```
   :w   保存;
   :w   filename 另存为filename;
   :wq! 保存退出;
   :wq! filename 以filename为文件名保存退出;
   :q! 不保存退出;
   :x 功能和:wq!相同;

```
3. git操作
  - git操作
  [git](https://segmentfault.com/a/1190000011673663)

### rm 和 git rm 的区别

1. 执行下面代码
```
rm readme.md
git status
git checkout -- readme.md

```
是在工作区

```
git rm readme.md
git status
git reset HEAD readme.md

```
是在暂存区

git rm 只能删除已经提交到版本库中的文件。其它状态的文件直接用这个命令操作是出错的。

dev-psh add content
