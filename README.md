# Mongoose Exercise: NBA List
Mongoose is a `Node.js` library that translates data in the Mongo database to JavaScript objects for use in your application. Let's take a look at creating and storing documents in a collection using MongoDB and Mongoose.

**Note:** For this exercise you will modify your code from the `toDo.js` exercise on Day 1. *Remember* that you stored all of your tasks in a `data.json` file. Now you will have to create an mlab database and re-write the `toDo.js` file to store tasks on your database.

## Set up mLab
1. Navigate to [https://mlab.com/login/](https://mlab.com/login/) and login to your mlab account (create an account if you do not have one).

1. Beside the **MongoDB Deployments** tab press the **Create New** button. Select **Amazon Web Services** as the Cloud Provider, and then **Single-node > *FREE* Sandbox Plan** under Plan. Don't forget to name the database. When you're all done, press `Create new MongoDB deployment`.

    ![newDeployment](./images/newDeploy.png)

1. Under the **Users** tab you should create a new user. This will make it easier for you to access your database using the MongoDB URI provided at the top of the page.

    ![new user](./images/addUser.png)

1. Copy the **MongoDB URI** located inside the box at the top of the screen. It should be under the text that says: `To connect using a driver via the standard MongoDB URI (what's this?)`. You will need this for later when you connect to the database using mongoose.

1. Now we are going to store this URI as an environmental variable using a shell script. Create a new file `env.sh` in `week03/day3/todo-mongoose` and put the `MONGODB_URI` from the previous step there:

    ```bash
    export MONGODB_URI="mongodb://moose:peanutbutterandjelly@ds055555.mlab.com:55555/example"
    ```

1. Run `source env.sh` to import the environment variable from `env.sh`. For an explanation of `source` [click here](https://bash.cyberciti.biz/guide/Source_command). **IMPORTANT**: You must run this command each time you open a new shell. This is because the environmental variables are initialized each time a new shell is opened.


### `env.sh` - IMPORTANT DISCLAIMER

We've put `env.sh` into the `.gitignore` file so you may notice that Git doesn't prompt you to
commit changes `env.sh`. We've excluded `env.sh` from Git because you shouldn't put your database
username and password on GitHub, where other people can see it!

## Exercises
In the command line, run the following command to populate your Player Document in mLab

    `node playerAdd.js`
    
Check in mLab to ensure there are 5 records in your Player document

Add a new model **Roster** in the model folder that has the following attributes

**Name**
  *	Required
  * Type string

**JerseyNumber**
  *	Not Required
  *	Type number

**Team**
  *	Required
  *	Type string



Open `/week03/day3/nba-mongoose/index.js` and and implement missing functionality where it says `// YOUR CODE HERE`. **NOTE:** be sure to do `npm install` before you begin.

When you are prompted to add 3 players, the information can be found below

| Name | Jersey Number | Team |
| --- | --- | --- |
| Lebron James | 23 | Cleveland Cavaliers|
| Russell Westbrook | 0 | Oklahoma City Thunder |
| Kevin Durant | 35 | Golden State Warriors |

### Test
Use the `npm start` command to test your functions. The tests could take a long time to run, so please be aware that this is normal.


