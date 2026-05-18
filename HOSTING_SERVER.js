const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const fs = require('fs')
const path = require('path')

// Log untuk memastikan file ini dipanggil oleh Passenger
fs.appendFileSync(path.join(__dirname, 'debug.log'), `Aplikasi dipanggil pada: ${new Date().toISOString()}\n`)

const dev = false 
const port = process.env.PORT || 3000

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    handle(req, res, parsedUrl)
  }).listen(port, () => {
    console.log(`Ready on port ${port}`)
    fs.appendFileSync(path.join(__dirname, 'debug.log'), `Server berhasil listen di port/socket: ${port}\n`)
  })
}).catch((err) => {
    fs.appendFileSync(path.join(__dirname, 'debug.log'), `ERROR STARTUP: ${err.message}\n`)
    process.exit(1)
})
