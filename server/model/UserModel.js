const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user',
    },
    groups: [{ type: Schema.Types.ObjectId, ref: 'GroupModel' }],
    expenses: [{ type: Schema.Types.ObjectId, ref: 'Expense' }],
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});

UserSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;
    next();
});

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    const compare = await bcryptjs.compare(password, user.password);
    return compare;
};

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;