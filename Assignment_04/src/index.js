const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
// app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});
// your code goes here

app.post('/add', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = num1+num2;
    if(typeof num1 == "string" || typeof num2 == "string"){
        res.status(400).json({
            status: "Error",
            message: "Invalid data types"
    })}    
    else if(num1 < -1000000 || num2 < -1000000 || result < -1000000){
        res.status(400).json({
            status: "Failed",
            message: "Underflow"
    })}
    else if(num1 > 1000000 || num2 > 1000000 || result > 1000000){
        res.status(400).json({
            status: "Failed",
            message: "Overflow"
    })}
    else{
        res.status(200).json({
            status: 'Success',
            message: 'the sum of given two numbers', 
            sum: result 
        })
    }
    
});

app.post('/sub', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = num1 - num2
    if(typeof num1 == "string" || typeof num2 == "string"){
        res.status(400).json({
            status: "Error",
            message: "Invalid data types"
    })}    
    else if(num1 < -1000000 || num2 < -1000000 || result < -1000000){
        res.status(400).json({
            status: "Failed",
            message: "Underflow"
    })}
    else if(num1 > 1000000 || num2 > 1000000 || result > 1000000){
        res.status(400).json({
            status: "Failed",
            message: "Overflow"
    })}
    else{
        res.status(200).json({
            status: 'Success',
            message: 'the difference of given two numbers', 
            difference: result 
        })
    }  
});

app.post('/multiply', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = num1 * num2
    if(typeof num1 == "string" || typeof num2 == "string"){
        res.status(400).json({
            status: "Error",
            message: "Invalid data types"
    })}    
    else if(num1 < -1000000 || num2 < -1000000 || result < -1000000){
        res.status(400).json({
            status: "Failed",
            message: "Underflow"
    })}
    else if(num1 > 1000000 || num2 > 1000000 || result > 1000000){
        res.status(400).json({
            status: "Failed",
            message: "Overflow"
    })}
    else{
        res.status(200).json({
            status: 'Success',
            message: 'The product of given numbers', 
            result: result 
        })
    }
});

app.post('/divide', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const result = num1 / num2
    if(num2 == 0){
        res.status(400).json({
            status: "Error",
            message: "Cannot divide by zero"
    })}  
    else if(typeof num1 == "string" || typeof num2 == "string"){
        res.status(400).json({
            status: "Error",
            message: "Invalid data types"
    })}    
    else if(num1 < -1000000 || num2 < -1000000 || result < -1000000){
        res.status(400).json({
            status: "Failed",
            message: "Underflow"
    })}
    else if(num1 > 1000000 || num2 > 1000000 || result > 1000000){
        res.status(400).json({
            status: "Failed",
            message: "Overflow"
    })}
    else{
        res.status(200).json({
            status: 'Success',
            message: 'The division of given numbers', 
            result: result 
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;