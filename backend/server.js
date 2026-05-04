import express from 'express'

const app = express()
const port = process.env.PORT || 3001

app.use(express.json())

const routes = [
  { path: '/', label: 'Home' },
  { path: '/company', label: 'COMPANY' },
  { path: '/portfolio', label: 'PORTFOLIO' },
  { path: '/contact', label: 'CONTACT' },
]

routes.forEach(({ path, label }) => {
  app.get(path, (req, res) => {
    res.json({ route: label })
  })
})

app.listen(port, () => {
  console.log(`Backend server listening on http://localhost:${port}`)
})
