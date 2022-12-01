    let express = require ('express')

    // require the api route
    let api_routes = require('./routes/student-api.js')
    let path = require('path')

    // Create web application
    let app = express()

    //Deploying to Azure
    let vueClientPath = path.join(__dirname, 'student=sign-in-client', 'dist')

    app.use(express.static(vueClientPath))

    //enable our app to express and process JSON requests, and convert data to JavaScript
    app.use(express.json())

    app.use('/api', api_routes)

    //Request to route we do not have and general error handler
    //This will catch all request made outside the specified url
    app.use( function(req, res, next) {
        //Respond with a 404 to any other requests
       res.status(404).send('Not found')
    })

    //Error handling route for server errors
    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Server error')
    })

    // Start server running on port 3000
    let server = app.listen(process.env.PORT || 3000, function(){
        console.log('Express server running on port ', server.address().port)
    })

