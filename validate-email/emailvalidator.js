// function ValidateEmail(mail) {
//     return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
// }
// console.log(ValidateEmail('test@test.com'))

const emailValidator = require('email-validator')

console.log(emailValidator.validate('test@test@gmail.com'))