Deci:

Create sample favorite songs meteor application

1. a certain directory : "meteor create topSongsApp"

2. create a new git repository (ours is : https://github.com/ATud/topSongsApp.git)

3. from folder topSongsApp, we try to connect to the repository.

	- git init
	- git add . (add all files)
	- git commit -m "Our message"
	- git remote add origin https://github.com/ATud/topSongsApp.git (actual connect the git to the origin)
	- git push origin master -  push all changes

4. using Mongo Collection, boostrap modal, and Session object

5. adding a router  : most used is iron:router. We can observe that the package names are having the next form: 'user':'package' 
	so that we can easily avoid naming conflicts.
	the command used is : ' meteor add iron:router '
	