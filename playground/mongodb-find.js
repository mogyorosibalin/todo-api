// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //     .find({
    //         _id: new ObjectID('5c517e60162f8711aa9f760d')
    //     })
    //     .toArray()
    //     .then((todos) => {
    //         console.log('Todos');
    //         console.log(JSON.stringify(todos, undefined, 2))
    //     })
    //     .catch((error) => {
    //         console.log('Unable to fetch todos', error);
    //     });

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         console.log(`Todos count: ${count}`);
    //     })
    //     .catch((error) => {
    //         console.log('Unable to fetch todos', error);
    //     });

    db.collection('Users')
        .find({
            name: 'Andrew'
        })
        .toArray()
        .then((users) => {
            console.log(JSON.stringify(users, undefined, 2));
        });

    db.close();
});