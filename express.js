const express = require('express')
const ExpressError = require('./expressError')
const app = express()
const {stringToArray, findMean, findMedian, findMode} = require('./helpers')


app.get('/mean', function(req, res){
    const {nums} = req.query
    let numsArray = stringToArray(nums)
    if (numsArray instanceof Error){
        throw new ExpressError(numsArray.message)
    }

    let results = {
        operation: "mean",
        result: findMean(numsArray)
    }
    return res.json(results)
})


app.get('/median', function(req, res){
    let { nums } = req.query
    let numsArray = stringToArray(nums)
    if (numsArray instanceof Error){
        throw new ExpressError(numsArray.message)
    }

    let results = {
        operation: "median",
        result: findMedian(numsArray)
    }

    return res.json(results)
})

app.get('/mode', function(req, res){
    let { nums } = req.query
    let numsArray = stringToArray(nums)
    if (numsArray instanceof Error){
        throw new ExpressError(numsArray.message)
    }

    let results = {
        operation: "mode",
        result: findMode(numsArray)
    }

    return res.json(results)
})


app.use(function(err, req, res, next){
    res.status(err.status || 500)

    return res.json({
        error: err,
        message: err.message
    })
})

app.listen(5000, function(){
    console.log("Connecting to port 5000")
})