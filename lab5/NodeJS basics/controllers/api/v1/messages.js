const Message = require('../../../models/Message');

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
    message.text = req.body.text;
    message.user = req.body.user;

    message.save( (err, doc) =>{
        if(err){
            res.json({
                status: "error", 
                message: "Could not save the message"
            });
            console.log(err);
        }
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

