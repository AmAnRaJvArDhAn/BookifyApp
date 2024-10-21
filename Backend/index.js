import express from 'express';
const app = express()
const port=3000
app.get('/', (req, res)=> {
  res.send('Hiii world!')
})
app.listen(port,( )=> {
  console.log(`Server is listening at http://localhost:${port}`)  // logs the server is running on the given port
})