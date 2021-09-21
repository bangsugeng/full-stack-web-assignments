1. What is the difference between `git reset` and `git revert`. When would you use one over the other? 

    Jika menggunakan `git reset`, commit terakhir akan hilang/terhapus. Sedangkan jika menggunakan `git revert` commit terakhirnya tetap ada, hanya mundur saja.

2. What is the difference between `git merge` and `git rebase`. When would you use one over the other? 

    `git-merge` - Join two or more development histories together

    `git-rebase` - Reapply commits on top of another base tip

3. What is the difference between `git stash pop` and `git stash apply`. When would you use one over the other? 

    `git stash pop` - Remove a single stashed state from the stash list and apply it on top of the current working tree state
    
    `git stash apply` - but do not remove the state from the stash list

4. What kinds of things can you do in `interactive` mode when rebasing?

    Interactive rebasing can be used for changing commits in many ways such as editing, deleting, and squashing.

    To tell Git where to start the interactive rebase, use the SHA-1 or index of the commit that immediately precedes the commit you want to modify.

    During an interactive rebase, when Git pauses at a commit you tagged to edit, the workflow is no different than a normal commit process — you stage files and then commit them. The only difference is you use the command `git commit --amend` rather than `git commit`.

    Interactive rebasing will create new SHA-1’s therefore it is best to use interactive rebasing on commits you have not pushed to a remote branch.