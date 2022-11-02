using node version 16.5.0

setting up files:

    -in project dir:
        touch server
    - cd server

# Setting up for heroku deployment

package.json:

    -for heroku we need to set a version of node and npm other than what heroku uses by default.

    -in the package.json we also want to add a start script pointing to "node index.js"

    -as well we need a .gitignore

setup server as git repo:

    git init
    git add .
    git commit "first"

Install Heroku CLI and create App:

    https://devcenter.heroku.com/articles/heroku-cli#install-the-heroku-cli

    for windows we follow instructions and download cli via installer
        * restart terminal after

login to heroku(assuming I have account):
    
    heroku login

create heroku app:

    heroku create
        this results in the url to our Heroku app shell, and another to our heroku git deployment.

add our app to the heroku repo(in our server dir):

    git remote add  heroku <heroku git deployment url>
            in this instance
    git remote add heroku https://git.heroku.com/stormy-lake-15654.git

    git push heroku master
    * git push heroku main

app url(one we got from heroku create):

    https://stormy-lake-15654.herokuapp.com/

    or:
        heroku open

# To redeploy in the future:

lets say we make a change to our codebase

     make sure all files are saved
        git status to check 

git add .
git add commit -m "changed greeting"
git push heroku main

# Google Oauth

20. Setting up passport:

    install in project:
        yarn add passport
        yarn add passport-google-oauth20

23. Instructions for setting up our project with google cloud

        -we create a google cloud project
        -enable google oauth API
        -create credintials for API

Securing our client secret:

    in project mkdir config
    in config touch keys.js
    in .gitinit add :
        keys.js

placing our id and secret in a module.exports objec. now we can ignore thease files in our .gitignore file 

26. Testing OAuth (after updating index.js)

        localhost:5000/auth/google
SUCCESS, we see a google auth box with my email address.

stage one of authentication complete

# 35. Mongodb Setup and Configuration

# 46. Enableing cookies

we have our outhentication setup FTMP, we just cant really use it yet until we have a frontend to log in with.
ill just have to be happy with no errors for right now. 

# 47 . Problems with passport v 0.6.0

    solution:
        uninstall and reinstall weith version 0.5.0 for now

# 47. Testing authentication

if we compare:

    http://localhost:5000/auth/google

with:

    http://localhost:5000/api/current_user
        we should see a google id returned

it works!!!

# 50. A Deeper Dive

an overview of how we use middleware with express.

he explains how cookie sessions store information in a way convient to us in that we wont need an express session

# 52. MongoDB Production setup Setting up another Database in 

    we can only have one Atlas cluster, but here we learn how to setup another database inside it. 

    the loophole is to create a new project, within that we create a new database, then we get the connection srv like normal

?? cannot find module config/keys

according to :

    https://www.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/7604934#questions/8480184

my error may have something to do with the ip address set for my mongo atlas

?maybe change ip address on my cluster before rebuild

I HAD keys.js in .gitignore INSTEAD OF  dev.js

# Must reset all credentials as they have now been posted publically

    all creds have been deleted (fresh slate)

    lets setup mongodb project clusters with unique connection strings

    next we just need to add new credentials for google+ api as it is already enabled

    finally I need to fill out the production keys in my heroku app.

    git  commit and git push heroku

# 58
# ITS ALIVE  dev and production environments are setup and working

test production database at this location:

    https://accounts.google.com/o/oauth2/v2/auth

for dev db its the same only localhost.

62. Running the Client and Server

using npm module concurrently to run 2 servers at the same time with a single command. see server package.json.  front-end server, back-end server

64. Routing Stumbling Block

71. Client React Setup

72. Installing Root Modules

in Client src:

    mkdir components
in components

    touch App.js