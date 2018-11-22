//const MongoClient = require('mongodb').MongoClient;
//object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDb server');

    // db.collection('Todos').find({
    //         _id:new ObjectID('5b8f2a1955231140dcee8ff2')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined ,2));
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch todos',err);
    // });

    db.collection('Users').find({name:'Jason'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined ,2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });

    //db.close();
})