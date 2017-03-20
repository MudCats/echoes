# MudCats Echoes #

# Initial Set Up #
1. npm install
2. Here are the instructions for installing and running postgresql:
## https://hratx-students.slack.com/files/megan.rabuse/F4HMU4URL/how_to_install_use_postgressql_for_mac.txt ##
** Warning **: these are instructions for installing postgresql on a **Mac**. If you have a windows computer, good luck?
3. Once psql is running, create your database
 1. Navigate into the echoes directory in terminal
 2. Enter: ``` createdb echoes ```
 3. Enter: ``` knex migrate:latest ```
4. To access database in terminal: ``` psql echoes ```

Highly recommended that you install Postico. Like DB Browser for SQLITE, it will allow you to view and interact with your database easily.

## Inside the Knexfile ##
Utilizes **postgresql**. It is being run in db.js. If you wish to log the sql commands that knex runs in your terminal, uncomment 'debug:true'

# Seed Files #
Seed data is pre-fabricated data that allows you to interact with a filled database without making a billion calls to the API.

## To use seed files: ##
1. Comment out all foreign key constraints in the migration file
2. Run: ``` knex migrate:rollback ``` followed by ``` knex migrate:latest ```
3. Run: ``` knex seed:run ```
4. Comment foreign key constraints back in
5. Run: ``` knex migrate:rollback ``` followed by ``` knex migrate:latest ```

# Viewing Console-Logs For Server Request #
1. To view console logs for server request, go into the knexfile and uncomment 'debug: true'. Then, any time you make changes server side:
2. Run: ``` npm start ``` (This recompiles your changes, which is what the app is reading)
3. Exit out of npm start using ctrl-c (npm start, while running the server, will not show console logs)
4. Run: ``` node server/server.js ``` (This will restart the server w/o recompiling, but allows you to view your server-side console logs)

# How to run website after initial setup complete #
1. ```npm start ``` the terminal will hang after compiling spec/serverSpec.js so then push ctrl-c
2. ``` node server/server.js ``` on the same terminal window after ctrl-c, leave this window running
3. Navigate to localhost:1337 on your browser

# Stretch Goals #
1. Implement a pages view so that you dont have to scroll continuously to view old albums
2. Implement a filter to rank albums by rating, date, or other criteria
3. Use the iTunes genius api or another service to recommend new albums a user may  be interested 
4. Add albums based on listening to a sound sample, like Shazam
5. Implement a more robust authentication system
6. Add a queue of new albums to checkout in the future
7. Integrate with Spotify so that when a new album is listened to that album is automatically added
8. Automate babel compiling