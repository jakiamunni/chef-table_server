const express = require('express')
const app = express()
const port = 5000
const chef= require('./data/chef.json')
const cors= require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send('Server is running')
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chef.find(n => n.id == id)
    res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})