// 1. npm i redis

// 2. import redis client
// const Redis = require('redis')
// const redisClient = Redis.createClient()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  redisClient.setex('name', 60, 'ymh')
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})