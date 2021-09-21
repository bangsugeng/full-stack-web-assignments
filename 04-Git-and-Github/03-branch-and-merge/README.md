1. What does `git clean` do?

    `git-clean` - Remove untracked files from the working tree. Cleans the working tree by recursively removing files that are not under version control, starting from the current directory.

    Normally, only files unknown to Git are removed, but if the -x option is specified, ignored files are also removed. This can, for example, be useful to remove all build products.

    If any optional `<path>...` arguments are given, only those paths are affected.

2. What do the `-d and -f` flags for `git clean` do? 
    
    `-d`

    Normally, when no <path> is specified, git clean will not recurse into untracked directories to avoid removing too much. Specify -d to have it recurse into such directories as well. If any paths are specified, -d is irrelevant; all untracked files matching the specified paths (with exceptions for nested git directories mentioned under `--force`) will be removed.

    `-f`
    `--force`
    
    If the Git configuration variable clean.requireForce is not set to false, git clean will refuse to delete files or directories unless given -f or -i. Git will refuse to modify untracked nested git repositories (directories with a .git subdirectory) unless a second -f is given.

3. What `git` command creates a branch? 

    `git-branch` - List, create, or delete branches
    
    `git branch <branch name>`

4. What is the difference between a fast-forward and recursive merge? 

    fast-forward
    
    Often the current branch head is an ancestor of the named commit. This is the most common case especially when invoked from git pull: you are tracking an upstream repository, you have committed no local changes, and now you want to update to a newer upstream revision. In this case, a new commit is not needed to store the combined history; instead, the HEAD (along with the index) is updated to point at the named commit, without creating an extra merge commit.
    
    recursive
    
    This can only resolve two heads using a 3-way merge algorithm. When there is more than one common ancestor that can be used for 3-way merge, it creates a merged tree of the common ancestors and uses that as the reference tree for the 3-way merge. This has been reported to result in fewer merge conflicts without causing mismerges by tests done on actual merge commits taken from Linux 2.6 kernel development history. Additionally this can detect and handle merges involving renames, but currently cannot make use of detected copies. This is the default merge strategy when pulling or merging one branch.

5. What `git` command changes to another branch? 
    
    `git checkout <branch name>`

6. How do you remove **modified or deleted** files from the working directory? 
    
    `git add -u`

7. What `git` command deletes a branch? 

    `git branch -d <branchname>`

8. What does the `git diff` command do?
    
    `git-diff` Show changes between the working tree and the index or a tree, changes between the index and a tree, changes between two trees, changes resulting from a merge, changes between two blob objects, or changes between two files on disk.

9. How do you remove files from the staging area? 

    `git-rm` - Remove files from the working tree and from the index

10. How do merge conflicts happen?
    
    A merge conflict happens when two branches both modify the same region of a file and are subsequently merged. Git can't know which of the changes to keep, and thus needs human intervention to resolve the conflict.

