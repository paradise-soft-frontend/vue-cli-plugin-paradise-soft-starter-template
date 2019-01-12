const express = require('express')
// const proxy = require('http-proxy-middleware')
// require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

// app.use(
//   '/api',
//   proxy({
//     target: process.env.VUE_APP_API_URL,
//     ws: false,
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api': '',
//     },
//   })
// )
app.use(express.static('dist'))
app.get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
app.listen(port)