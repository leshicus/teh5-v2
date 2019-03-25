const axios = require('axios')

// const url = 'https://classroom.kespa.ru/api/content/lessons/1/sentences'
const url = 'https://classroom.kespa.ru/api/content/'
const START_NUM = 131
const END_NUM = 200
const fs = require('fs')

// sentences 1..61
// texts 1..185
const getSent = async (fileNumber = 1) => {
  try {
    // const { data } = await axios.get(`${url}/lessons/${fileNumber}/sentences`)
    const { data } = await axios.get(`${url}/texts/${fileNumber}`)

    if (data) {
      // fs.writeFile(`sent/${fileNumber}.json`, JSON.stringify(data), function(
      fs.writeFile(`texts/${fileNumber}.json`, JSON.stringify(data), function(
        err,
      ) {
        if (err) {
          // return console.log(err)
          console.log(`File ${fileNumber} was NOT saved.`)
        }

        console.log(`File ${fileNumber} was saved.`)
      })
    }
  } catch (e) {
    console.log(e)
  }
}

for (let i = START_NUM; i <= END_NUM; i++) {
  setTimeout(() => getSent(i), 500)
}
