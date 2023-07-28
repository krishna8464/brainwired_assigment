const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstname : {
        type : String,
        require : true,
    },
    lastname : {
        type : String,
    },
    dob : {
        type : String,
        require : true,
    },
    address : {
        type : String,
        require : true,
    }
},
{ timestamps: true },
{ versionKey: false }
)

const UserModel = mongoose.model("User",UserSchema);

module.exports={
    UserModel
}