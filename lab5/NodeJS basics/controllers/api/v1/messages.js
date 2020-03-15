
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
    res.json({
        "status": "succes",
        "data":{
            "message":{
                "text": "okeee"
            }
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

