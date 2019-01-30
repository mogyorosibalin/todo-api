const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '5c51b3112beea352182e519e11';

// if(!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo
//     .find({
//         _id: id
//     })
//     .then((todos) => {
//         console.log('Todos', todos);
//     })

// Todo
//     .findOne({
//         _id: id
//     })
//     .then((todo) => {
//         console.log('Todo', todo);
//     })

// Todo
//     .findById(id)
//     .then((todo) => {
//         if (!todo) return console.log('ID not found');
//         console.log('Todo by ID', todo);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


User
    .findById('5c51a7df89d1131515d8c092')
    .then((user) => {
        if (!user) return console.log('Unable to find user');
        console.log(JSON.stringify(user, undefined, 2));
    })
    .catch((error) => {
        console.log(error);
    })