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
    git remote add heroku https://git.heroku.com/powerful-mesa-10151.git

    git push heroku master


