command yang digunakan untuk `02-portofolio-and-cv`

```bash
mkdir doni
touch README.md
printf("Halo perkenalkan aku halaman utama") > README.md
git commit -m "Inisialisasi Git Repository"
git branch cv
git checkout cv
touch cv.txt
printf("Ini adalah file CV") > cv.txt
git commit -m "Inisialisasi CV"
printf("\nsAngkringan Krastikrep") >> cv.txt
git commit -m "menambahkan angkringan krastikrep"
printf("\nMini Resti Chambaket") >> cv.txt
git commit -m "menambahkan chambaket"
printf("\nPemkot Bikini Botom") >> cv.txt
git commit -m "menambahkan pemkot bikini botom"
git checkout master
printf("Ini adalah update pertama pada branch master") >> README.md
git commit -m "update master pertama"
git merge cv
git push
```