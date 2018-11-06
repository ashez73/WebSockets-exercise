const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 8080 })
console.log('ok')
wss.on('connection', ws => {
	ws.on('message', message => {
		console.log(`Received	message	=>	${message}`)
	})
	ws.on('close', () => {
		console.log('closed')
	})
	ws.send('initial handshake!')
})

