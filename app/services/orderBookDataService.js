
const moment = require('moment');
const { workerData } = require('worker_threads');
const {client} = require('../utils/redis')
const formatDate = require('../utils/date');
const {socket} = require('../utils/socket');
let loop;

const recordorderBookData = async(EVENT_ID, END_TIME) => {
    try {
        socket.emit('subscribe_ltp_stream', EVENT_ID); 
        socket.on(`event_ltp_${EVENT_ID}`,async (response)=>{ 
            try{
                await client.set(`ltp_yes_price_${EVENT_ID}`, JSON.stringify((response.data.buy)), 'EX', 25 * 60);
                await client.set(`ltp_no_price_${EVENT_ID}`,JSON.stringify((response.data.sell)), 'EX', 25 * 60);
                await client.set(`ltp_last_updatedAt_${EVENT_ID}`,JSON.stringify((response.data.updatedAt)), 'EX', 25*60);
                await client.set(`end_time_${EVENT_ID}`, JSON.stringify((END_TIME)), 'EX', 15 * 60);
                const currentDate = new Date().toJSON();
                if(moment(END_TIME).unix() <= moment(currentDate).unix()-10){
                    socket.emit(`unsubscribe_orderbook`, EVENT_ID);
                }
                console.log(response);
	    }catch(err){
                console.log("Error: ", err);
            }
        })
    } catch(err) {
        console.log(err);
    }
}


const main = async() => {
    await recordorderBookData(workerData.event_id, workerData.end_time);
}

main()