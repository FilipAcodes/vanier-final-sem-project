# This is the project for the Web Dev in Vanier

## Install the node packages

run the program using `run dev`

## Features

Uses the CRUD principle, connection.js can be modified in the api folder

Uses OracleSQL as a database, certain tables need to be configured to match it

The application has all the methods inside of `src/app/api`.

The site features an input to create a "todo"

Once a "todo" has been created it will appear underneath with the option to either edit or delete it.

The x will prompt the user for a confirmation using an alert, once confirmed through the alert the "todo" will be deleted.

The edit button will open a modal and allow the user to change the content of that specific "todo". Once edited or closed, the page will refetch(if necessary) with the updated "todo".
