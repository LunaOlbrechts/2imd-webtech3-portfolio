const express = require("express");
const router = express.Router();
const messagesController = require('../../../controllers/api/v1/messages');

router.get("/", messagesController.getAllMessages);
router.get("/", messagesController.getMessageByUsername);
router.get("/", messagesController.getMessageById);
router.post("/", messagesController.createMessage);
router.get("/", messagesController.removeMessage);
router.get("/", messagesController.updateMessage);

module.exports = router;