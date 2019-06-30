const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    expenseName: {
        type: String,
        required: true
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'CategoryModel'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    dateCreated: {
        type: Date,
        required: true
    }
});

const ExpenseModel = mongoose.model('expense', ExpenseSchema);
module.exports = ExpenseModel;