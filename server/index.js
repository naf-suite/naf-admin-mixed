/**
 * nuxt中通过server-middleware的方式使用express
 */
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

// Create express instnace
const app = express()

// Body parser, to access `req.body`
app.use(bodyParser.json())

// Sessions to create `req.session`
app.use(session({
  secret: 'super-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1200000 }
}))

// Require API routes
const login = require('./routes/login')

// Import API Routes
app.use(login)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
