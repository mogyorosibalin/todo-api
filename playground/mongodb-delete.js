// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    // db.collection('Todos')
    //     .deleteMany({
    //         text: 'Each lunch'
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     });

    // deleteOne
    // db.collection('Todos')
    //     .deleteOne({
    //         text: 'Each lunch'
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })

    // findOneAndDelete
    // db.collection('Todos')
    //     .findOneAndDelete({
    //         completed: false
    //     })
    //     .then((result) => {
    //         console.log(result);
    //     })

    db.collection('Users')
        .deleteMany({
            name: 'Andrew'
        });

    db.collection('Users')
        .findOneAndDelete({
            _id: new ObjectID('5c517d1dc83edf11905c52a4')
        })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })

    db.close();
});