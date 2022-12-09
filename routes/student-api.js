// Makes the route for getting all the students and for adding a new student
    let express = require('express')
    let db = require('../model') //will fetch whatever index.js exports; which is our sequelize db to make it available to our api route
    let Student = db.Student // grabs the student model

    let router = express.Router()

// a request to student will cause this function to run
// findAll() returns a promise that contain the array of our students which is then converted into json and return it back to our vue client
    router.get('/students', function(req, res, next){
        Student.findAll( {order: ['present', 'starID'] } ).then( students => { //order function sort the input by whatever is in the array
            return res.json(students)
        }).catch( err => next(err) )
    })

// post used to create a request to our record on a server to create a new student object and then return a status code
    router.post('/students', function (req, res, next){
        Student.create( req.body ).then( data => {
            return res.status(201).send('ok')
        }).catch( err => {
            //handle user errors, e.g. missing starID or name
            if ( err instanceof db.Sequelize.ValidationError ){
                //respond with 404 bad request error code, include error messages
                let messages =  err.errors.map( e => e.message )
                return res.status(400).json(messages)
            }

            //otherwise, something unexpected has gone wrong
            return next(err)
        })
    })

    //Edit a student using the patch function with the syntax express of ':id' to match student with id for editing
    router.patch('/students/:id', function (req, res, next){
        //if request is to /students/100
        //studentID will be 100 and so on
        let studentID = req.params.id
        let updatedStudent = req.body
        Student.update(updatedStudent, { where: { id: studentID } })
            .then( (rowsModified) => {

                let numberOfRowsModified = rowsModified[0] // number of rows changed

                if (numberOfRowsModified == 1){ //exactly one row is changed
                    return res.send('ok')
                // no rows - errors to handle student not found - return 404
                } else {
                    return res.status(404).json(['Student with id not found'])
                }

            //What about a modification that violates a constraint
            // for instance, modifying a student to have no name
            })
            .catch( err => {
                //if validation error, tell user that's a bad request
                // For instance, modify student to have no name
                if (err instanceof db.Sequelize.ValidationError) {
                    let messages = err.errors.map( e => e.message)
                    return res.status(400).json(messages)
                } else {
                    //unexpected error to be passed on to error handler in server.js
                    return next(err)
                }
            })
    })

    // Create a route to delete student both on vue and our database
    router.delete('/students/:id', function (req, res, next) {
        let studentID = req.params.id
        Student.destroy( {where: {id: studentID } } )
            .then( (rowsDeleted) => {
                if (rowsDeleted == 1) {
                    return res.send('ok')
                } else {
                    return res.status(404).send(['Not found'] )
                }
            })
            .catch( err => next(err) ) //For unexpected errors
    })

// Make our router available to the rest of our project
    module.exports = router