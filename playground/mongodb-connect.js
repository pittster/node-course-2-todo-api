//const MongoClient = require('mongodb').MongoClient;
//object destructuring
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDb server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: 'false'
    // },(err,result)=>{
    //     if (err){
    //         return console.log('Unable to insert todo',err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Users').insertOne({
    //     name:'Jason',
    //     age:45,
    //     location:'Fredericton'
    // },(err,result) => {
    //     if (err){
    //         return console.log('Unable to insert User',err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.close();
})