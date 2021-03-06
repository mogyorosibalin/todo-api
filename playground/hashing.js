const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// const data = {
//     id: 10
// };

// const token = jwt.sign(data, '123abc');
// console.log(token);

// const decoded = jwt.verify(token, '123abc');
// console.log(decoded);

// const message = 'I am user number 3';
// const hash = SHA256(message).toString();

// console.log('Message:', message);
// console.log('Hash:', hash);

// const data = {
//     id: 4
// };
// const token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'some secret').toString()
// };

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

// const resultHash = SHA256(JSON.stringify(token.data) + 'some secret').toString();

// if (resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }

const password = '123abc!';

bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(password, salt, (error, hash) => {
        console.log(hash);
    });
});

const hashedPassword = '$2a$10$s3B0L5u6sw5nN8MybIaj8O/TvzXxLQ446JCVWcs4loWQpPZ44wUSK';

bcrypt.compare(password + 'a', hashedPassword, (error, result) => {
    console.log(result);
});