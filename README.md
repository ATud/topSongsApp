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
	
	
Extra info about the technologies: 

1. Meteor creates a server - client webapp , that connects natively to a mongoDB database.

2. The communication is mainly achived by using webworkers.

3. Webworkers 

- they represent a part of new HTML5 specifications, and can run scripts in Background tasks.
- once they are started a worker can send messages through the channel opened, by posting messages to an event handler, and viceversa.
- in general they are created using a constructor (ex: new Worker()) that will run a javascript file. 
- the workers run in another context than the 'window' context -> window in a worker will be undefined.
- they solve the lovely error that still annoys you : 'A script on this page may be busy ... -> Stop Script - Continue' - where Continue means 
waiting for Christmas.
- has a lot of function that helps you send messages, attach listeners or send querries. (postMessage(),addListener(), sendQuery())

3. Mongo Collections: new Mongo.Collection(name, [options])
- in case we don't have a nave, we will get a local connection, that will not be able to synchronize with the server
- The function returns an object with methods to insert documents in the collection, update their properties, and remove them, 
and to find the documents in the collection that match arbitrary criteria. 
The way these methods work is compatible with the popular Mongo database API. 
The same database API works on both the client and the server

4. Session Object:
- session provides a global object on the client that you can use to store an arbitrary set of key-value pairs. 
Use it to store things like the currently selected item in a list.
- has 4 methods : set, setDefault, get, equals

5. Router: 
- at their most basic, routes are used to associate a URL path with a template.
- the template that will be used for a certain route, cand be specified in the route function callback for the 'urlRoute' url 
Router.route('/ourRoute', {
    template: 'ourTemplate'
});
- if we have a Router.configure block, we can define a number of options that will apply to all of the routes within our project.
- we can generate a link for a certain route by generating a link like (but we should transit into the Route.route function a 'name: "ourRoute"') :
	<a href="{{pathFor route='ourRoute'}}" 
	