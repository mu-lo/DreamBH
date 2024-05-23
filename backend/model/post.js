const mongoose = require("mongoose");
const user = require("./user");

const PostSchema = new mongoose.Schema({
    Name : {type:String, require:true},
    Category:{type: String},
    Description: {type:String, require:[true, "Description of the boarding house is needed"]},
    Location:{type:String, require:[true, "locations of the boarding house is needed"]},
    Image:{ type:[String]},
    Contact:{type:String},
    user_id: {type: mongoose.Schema.Types.ObjectId,
    ref: user }
}, {timestamps:true})

module.exports = mongoose.model('Post', PostSchema);