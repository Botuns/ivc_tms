const _express = require('express')
const _app = _express()
const _cors = require('cors')
const _dbConnect = require('./configs/_dbConfig')
const { _notFound, _errorHandler } = require("./middlewares/_errorHandler");
const _authRoutes = require('./routes/auth.routes')
const _atfalRoutes = require('./routes/atfal.routes')
const _attendeeRoutes = require('./routes/attendee.routes')
_app.use(_express.json()); 
_app.use(_cors())
_dbConnect()
const PORT = process.env.PORT || 4000; //port number
_app.use('/api',_authRoutes)
_app.use('/api',_atfalRoutes)
_app.use('/api',_attendeeRoutes)
_app.use('/',(req,res) => { //root route
    console.log('working ...')
    res.send(`<h1 style='color:white; background-color:black; margin:0;padding:.5cm;border-radius:2rem;text-align:center '>Hello there!👋 this is the index api for the app. running at this port 👉 ${PORT} </h1>`);
})
_app.listen(PORT, () => console.log(`Listening on port ${PORT}...`)); //listens to the port number and logs it to the console 
_app.use(_notFound)
_app.use(_errorHandler)