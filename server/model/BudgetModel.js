const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    planned: {
        type: Number
    },
    expenses: [{
        type: Schema.Types.ObjectId,
        ref: 'ExpenseModel'
    }],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    createdOn: {
        type: Date
    }
});

const BudgetModel = mongoose.model('budget', BudgetSchema);
module.exports = BudgetModel;