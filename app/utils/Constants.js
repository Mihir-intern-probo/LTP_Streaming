const API_USED = {
	SOCKET_CONSTANTS:{
		STOCKS_TOPIC_ID: 45,
        CRYPTO_TOPIC_ID: 2449,
        BINANCE_BTC_SOCKET: "wss://stream.binance.com:9443/ws/btcusdt@kline_1s",
    },
	AUTH_TOKEN: "liCAXgX6GYj8+eUNZMopUtCTewvl2HhBJt3C3ZZHXzo=",
	SOCKET: "wss://falcon.api.probo.in",
	EXIT_API: "https://prod.api.probo.in/api/v2/oms/order/exit",
	CANCEL_API: "https://prod.api.probo.in/api/v1/oms/order/cancel/",
	CHECK_ORDER_EXIT: "https://prod.api.probo.in/api/v1/oms/order/exit/info?order_id=",
	CHECK_ORDER_STATUS: "https://prod.api.probo.in/api/v2/oms/order/Summary/",
	ORDER_API: "https://prod.api.probo.in/api/v1/oms/order/initiate",
	CANCEL_AND_EXIT_API :"https://prod.api.probo.in/api/v3/oms/order/exit/"
};
module.exports = API_USED;
