const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: String,
    user: String
});

const Message = mongoose.model('Message', messageSchema);



const getAllMessages = (req, res) =>{
    res.json({
        "status": "succes",
        "data": {
            "messages": []
        }
    });
}

const getMessageByUsername = (req, res) =>{
    res.json({
        "status": "succes"
    });
}

const getMessageById = (req, res) =>{
    res.json({
        "status": "succes"
    });
}

const createMessage = (req, res) =>{
    let message = new Message();
    message.text = "haha";
    message.user = "luna";

    message.save( (err, doc) =>{
        if(!err){
            res.json({
                "status": "succes",
                "data":{
                    "message": doc
                }
            });
        }
    });
}

const removeMessage = (req, res) =>{
    res.json({
        "status": "succes"
    });
}

const updateMessage = (req, res) =>{
    res.json({
        "status": "succes"
    });
}


module.exports.getAllMessages = getAllMessages;

module.exports.getMessageByUsername = getMessageByUsername;

module.exports.getMessageById = getMessageById;

module.exports.createMessage = createMessage;

module.exports.removeMessage = removeMessage;

module.exports.updateMessage = updateMessage;

