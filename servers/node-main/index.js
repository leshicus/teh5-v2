const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
const port = process.env.PORT_NODE_API_LOCAL
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/hello', async (req, res) => {
  const resp = {
    express: 'Hello From Express',
  }
  try {
    const { data } = await axios.get('http://node-api:3000')
    resp.website0 = data
  } catch (e) {
    console.log(e)
  }

  try {
    const { data } = await axios.get('http://python-api')
    resp.product = data
  } catch (e) {
    console.log(e)
  }

  res.send(resp)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
