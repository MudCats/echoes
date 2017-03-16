# MudCats Echoes#

#Initial Set Up#
1. npm install
2. Here are the instructions for installing and running postgresql:
##https://hratx-students.slack.com/files/megan.rabuse/F4HMU4URL/how_to_install_use_postgressql_for_mac.txt##
**Warning**: these are instructions for installing postgresql on a **Mac**. If you have a windows computer, good luck?
3. Once psql is running, create your database
 1. Enter echoes dir in terminal
 2. Run: createdb echoes
 3. Run: knex migrate:latest
4. To access database in terminal: psql echoes

Highly recommended that you install Postico. Like DB Browser for SQLITE, it will allow you to view and interact with your database easily.

##Inside the Knexfile##
Utilizes **postgresql**. It is being run in db.js. If you wish to log the sql commands that knex runs in your terminal, uncomment 'debug:true'

#Seed Files#
Seed data is pre-fabricated data that allows you to interact with a filled database without making a billion calls to the API.
##To use seed files:##
1. Comment out all foreign key constraints in the migration file
2. Run: knex migrate:rollback && knex migrate:latest
3. Run: knex seed:run
4. Put foreign key constraints back in
5. Run: knex migrate:rollback && knex migrate:latest

#Viewing Console-Logs For Server Request#
To view console logs for server request, go into the knexfile and uncomment 'debug: true'.
Then, any time you make changes server side:
1. Run: npm start (This recompiles your changes, which is what the app is reading)
2. Exit out of npm start (npm start, while running the server, will not show console logs)
3. Run: node server/server.js (This will restart the server w/o recompiling, but allows you to view your server-side console logs)
