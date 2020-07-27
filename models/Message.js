const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema(
    {
        content: String
    });
    // 이게 모지?
    module.exports = mongoose.model('Message',MessageSchema);