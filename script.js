// axios http request

axios({
  url: 'https://random-words-api.vercel.app/',
  method: 'post',
  headers: {
    'content-type': 'multipart/form-data'
  },
  data: form
})

// call the api

const myFunction = async () => {
  console.log('first')
  await axios.get('https://random-words-api.vercel.app/').then(function () {
    console.log('second')
  })
  console.log('third')
}

