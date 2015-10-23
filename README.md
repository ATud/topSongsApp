Deci:

Pasii pentru creearea aplicatiei

1. intr-un director : "meteor create topSongsApp"

2. creere pe git a unui repository (al nostru va fi : https://github.com/ATud/topSongsApp.git)

3. din folderul topSongsApp, incercam sa legam aplicatia noastra goala, de repositoryul pe care tocmai l-am creat.

	- git init
	- git add . (adauga toate fisierele noastre)
	- git commit -m "Mesajul nostru"
	- git remote add origin https://github.com/ATud/topSongsApp.git (legam git-ul nostru local de un repository remote)
	- git push origin master -  facem push la noile noastre fisiere adaugate si comise, in masterul repositoryului nostru ( sau ce bransa facem noi)

4. folosirea Mongo Collection