const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryModel'
    },
    children: [
        {
            type: Schema.Types.ObjectId,
            ref: 'CategoryModel'
        }
    ],
    expenses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'ExpenseModel'
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    }
});

const CategoryModel = mongoose.model('category', CategorySchema);
module.exports = CategoryModel;