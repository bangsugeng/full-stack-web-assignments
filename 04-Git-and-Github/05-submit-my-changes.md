command yang digunakan untuk `05-submit-my-changes`

```
git clone https://github.com/bangsugeng/tech4impact-students-bio.git
git branch sugeng-romadhoni
git checkout sugeng-romadhoni
touch sugengromadhoni.md
printf("Nama Lengkap: sugeng romadhoni\nUmur: 21\nPesan yang ingin disampaikan: Semangat untuk kamu yang disana sedang berjuang wang wang\n") > sugengromadhoni.md
git add sugengromadhoni.md
git commit -m "sugengromadhoni.md"
git checkout master
git merge sugeng-romadhoni
git push
```
