const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://bruhmoment:pokemon@cluster0.uplpab1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);


export async function mongoRun() {
  try {
    await client.connect();
    console.log("connected to db");
  } catch (error) {
    console.error("couldn't connect to db, error: ", error);
  }
}

export async function mongoClose() {
    try {
      await client.close();
      console.log("closed connection to db");
    } catch (error) {
        console.error("couldn't close the db, error: ", error);
      }
  }

export async function findUser(username: string) {
    try {
        const query = {
            name: username
        }

        const user = await client.db("fastifyPractice").collection("users").findOne(query);

        if (!user) {
            return null;
        } else {
            return user;
        }
    } catch (error) {
        console.error("some error was found when trying to make request: ", error);

        throw error;
    }
}

export async function getAllUsers() {
  try {

      const users = await client.db("fastifyPractice").collection("users").find({}).toArray();

      if (!users) {
          return null;
      } else {
          return users;
      }
  } catch (error) {
      console.error("some error was found when trying to make request: ", error);

      throw error;
  }
}

export async function createUser(username: string) {
  try {
      const newUser = {
          name: username
      }

      const user = await client.db("fastifyPractice").collection("users").insertOne(newUser);

      if (!user) {
          return null;
      } else {
          return user;
      }
  } catch (error) {
      console.error("some error was found when trying to make request: ", error);

      throw error;
  }
}