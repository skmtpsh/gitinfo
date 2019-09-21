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

<<<<<<< HEAD
git dev-psh 分支修改的内容
=======
dev-psh add content
>>>>>>> dev-psh

git branch -a 查看远程分支

	总结：一般我们就

	1. 用git push --set-upstream origin branch_name 来在远程创建一个与本地branch_name同名的分支并跟踪；
	2. 用git checkout --track origin/branch_name    来在本地创建一个与branch_name同名分支跟踪远程分支。

