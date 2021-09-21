command yang digunakan pada `01-the-basics`

```bash
mkdir git-basic
cd git-basic
touch first.txt
git init
git add first.txt
git commit -m "adding first.txt"
git log
touch second.txt
git commit -m "adding second.txt"
git rm first.txt
git commit -m "removing first.txt"
git log
```