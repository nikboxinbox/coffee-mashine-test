import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

app.get('/options', (req, res) => {
  res.status(200).json({
    sizes: ['standart', 'large'],
    numDrinks: [6, 8, 12]
  })
})

app.listen(port, () => {
  console.log(`Server running  http://localhost:${port}`)
})
