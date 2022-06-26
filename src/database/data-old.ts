import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGODB_URL as string);

export const mongdbconn = async () =>
  client.connect(async function (err) {
    if (err) throw err;
    console.log("Connected successfully to db");
    const db = client.db("myFirstDatabase");
    const collection = db.collection("people");
    // console.log(collection);

    // retrive
    // let datafrommongo = await collection.find().toArray();
    // console.log(datafrommongo);

    // insertOne;
    // let insertdatatomongo = await collection.insertOne(
    //   {
    //     name: "Sagar",
    //     age: 20,
    //     favoriteFoods: ["Aam", "Santra"],
    //   },
    //   (err, data) => {
    //     if (err) throw err;
    //     else console.log(data);
    //   }
    // );
    // console.log(insertdatatomongo);

    // insertMany;
    // let insertdatatomongo = await collection.insertMany(
    //   [{
    //     "name":"adarhs",
    //     "age":25,
    //     favoriteFoods:["banana","loal"]
    //   }, {
    //     "name":"kks",
    //     "age":22,
    //     favoriteFoods:["f","lorl"]
    //   }, {
    //     "name":"niwesh",
    //     "age":28,
    //     favoriteFoods:["a","lodl"]
    //   }, {
    //     "name":"taoas",
    //     "age":22,
    //     favoriteFoods:["banana","lovl"]
    //   }],
    //   (err, data) => {
    //     if (err) throw err;
    //     else console.log(data);
    //   }
    // );
    // console.log(insertdatatomongo);

    // findOne
    const filter = {
      name: "Sagar",
    };
    // let findOneCollection = await collection.findOne(filter, (err, data) => {
    //   if (err) console.log(err);
    //   else console.log(data);
    // });
    // console.log(findOneCollection);

    // deleteOne
    // let deleteOneCollection = await collection.deleteOne(
    //   filter,
    //   (err, data) => {
    //     if (err) console.log(err);
    //     else console.log(data);
    //   }
    // );
    // console.log(deleteOneCollection);

    const updated = {
        $set:{
            favoriteFoods : ["lol"]
          }
      
    }
    //updateOne
    let updateoneCollection = await collection.updateOne(
      filter,
      updated,
      (err, data) => {
        if (err) console.log(err);
        else console.log(data);
      }
    );
      console.log(updateoneCollection);
      
    client.close();
  });
