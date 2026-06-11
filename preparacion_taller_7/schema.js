const {Schema, model} = require('mongoose')
const UserSchema = new Schema(
    {
        name: {type: String, required: [true, 'El nombre es obligatorio']},
        lastname: {type: String, required: [true, 'El apellido es obligatorio']},
        rut: {type: String, unique: true, required: [true, 'El RUT es obligatorio']},
    },
    { timestamps: true},
);
const Users = model('users', UserSchema)
module.exports = {UserSchema, Users}