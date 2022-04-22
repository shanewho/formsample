const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post('/submit', (req, res) => {
  console.log('POST /submit', req.body, req.headers)
  if(req.headers?.['content-type'] !== 'application/json') {
    console.log('No content-type header')
    return res.sendStatus(400)
  }
  if(!req.headers?.authorization) {
    console.log('Warn: No API Key in Authorization header')
    return res.sendStatus(401)
  }
  if(!req.headers?.authorization === 'abc1234') {
    console.log('Warn: Invalid API key in Authorization header')
    return res.sendStatus(401)
  }

  res.json({
    status: 'ok',
    message: `Thanks ${req.body.companyName}, your quote # is: Q-`+String(Math.random()).substring(3,10)
  })
})

app.get('/application', (req, res) => {
  res.json({
    questions: [
      {
        id: 'companyName',
        type: 'text',
        label: 'Company Name',
      },
      {
        id: 'yearsInBusiness',
        type: 'text',
        label: 'Years In Business',
      },
      {
        id: 'claims',
        type: 'yesno',
        label: 'Have you had any claims in the last 4 years?',
      },
      {
        id: 'businessStructure',
        type: 'select',
        label: 'What is your business structure?',
        options: [
          'LLC',
          'Corporation',
          'Sole Proprietor',
          'Partnership',
          'Other',
        ]
      },
      {
        id: 'productType',
        type: 'select',
        label: 'Choose a type of coverage for the quote',
        options: [
          'General Liability',
          'Business Owners',
          'Cyber',
          'Crime',
        ]
      },
    ]
  })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
  console.log(`API available at http://localhost:${port}/application`)
})
