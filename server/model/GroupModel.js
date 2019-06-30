const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    groupName: {
        type: String,
        required: true
    },
    users: [{ type: Schema.Types.ObjectId, ref: 'UserModel' }]
});

const GroupModel = mongoose.model('group', GroupSchema);

module.exports = GroupModel;