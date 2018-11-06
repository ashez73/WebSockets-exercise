console.log('init')
const url = 'ws://localhost:8080'
const connection = new WebSocket(url)
let message

connection.onopen = () => {
  connection.send('hey')
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}
const elem = document.getElementById("btn")

elem.addEventListener('click', function(event){
  message = document.getElementById("message").value
   console.log(this)

   connection.send(message)
  })