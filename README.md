# StoreFinderAPI-Node-

Currently this API does not have the store searching functionality of the Flask version 
of the application; however, it does include a CRUD API for all of the database models
using Sequelize for MySQL.

To run the code (in a Linux environment,) please follow these steps:

1  in a terminal, cd into the directory where you want the repository and clone the repo  
$ git clone https://github.com/KyleJGreen/StoreFinderAPI.git

2-  cd into the cloned repository and install the dependencies
$ npm install body-parser express mysql  mysql2 sequelize sequelize-cli --save

3  launch the server
$ node server.js

You should now be able to access the routes on port 3000 of your localhost.
