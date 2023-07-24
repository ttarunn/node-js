const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
let studentData = require('./InitialData')
//app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here
let new_id = studentData.length + 1
app.get('/api/student', (req, res) => {
    const id = req.query.id;
    let getData = studentData;
    if(id){
        getData = studentData.filter(data => data.id == id)
    }
    if(getData.length){
        res.status(200).json({
            status: "success",
            Data: getData
        })
    }else{
        res.status(400).json({
            status: "Record Not Found",
        })
    }
});

app.post('/api/student', (req, res) => {
    const data = req.body;
    if(data.name && data.currentClass && data.division){
        studentData.push({
            id: new_id,
            ...data
        });
        res.setHeader('content-type', 'application/x-www-form-urlencoded')
        res.status(200).json({
            status: "success",
            id: new_id
        });
        new_id++;
    }
    else {
        res.setHeader('content-type', 'application/x-www-form-urlencoded')
        res.status(400).json({
            status: "Incomplete Details",
        })
    }
});

app.put('/api/student/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    const idx = studentData.findIndex(post => post.id == id);
    
    if(idx !== -1){
        let filtered_post = studentData[idx];
        if(updatedData.name){
            filtered_post.name = updatedData.name
        }
        if(updatedData.currentClass){
            filtered_post.currentClass = updatedData.currentClass
        }
        if(updatedData.division){
            filtered_post.division = updatedData.division
        }

        res.setHeader('content-type', 'application/x-www-form-urlencoded')
        res.status(200).json({
            status: "success",
            data: filtered_post
        });
    }else{
        res.setHeader('content-type', 'application/x-www-form-urlencoded')
        res.status(400).json({
            status: "Invalid ID",
        })
    }
});

app.delete('/api/student/:id', (req, res) => {
    const id = req.params.id;
    const idx = studentData.findIndex(post => post.id == id);
    if(idx !== -1){
        studentData.splice(idx, 1);
        res.status(201).json({
            status: "Record Deleted!"
        })
    }else{
        res.status(400).json({
            status:"Invalid ID"
        })
    }
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   