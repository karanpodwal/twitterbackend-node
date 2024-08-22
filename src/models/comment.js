import mongoose from 'mongoose';


const commnetSchema = new mongoose.Schema({
    content :{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
    },
    Comment:{
        type:String
    },
    onModel:{
        type:String,
        required:true,
        enum : ["Tweet","Comment"],
    },
    Commentable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel'
    },
    

});

const Comment = mongoose.model('Comment', commnetSchema);

export default Comment;