const express = require('express')
const app = express()
const cors = require('cors')
const port = 3333

app.use(cors())
app.use(express.json())

const familyCtrl = require('./controllers/familyController')
const familyUrl = '/api/family'

//ENDPOINTS
app.get(familyUrl, familyCtrl.getFamily)
app.post(familyUrl, familyCtrl.postFamily)
app.put(`${familyUrl}/:id`, familyCtrl.putFamily)
app.delete(`${familyUrl}/:id`, familyCtrl.deleteFamily)

app.listen(port, console.log(`Server listening on port ${port}`))