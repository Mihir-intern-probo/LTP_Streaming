const {io} = require('socket.io-client')

const dotenv = require('dotenv');
dotenv.config();

socket = io.connect('wss://falcon.api.probo.in/',{
    transports: ['websocket'],
});

module.exports = {socket}
