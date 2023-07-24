const router = require('express').Router();
const Blog = require('../models/Blog');

// Your routing code goes here

router.get('/blog', (req,res)=>{
    
    const page = req.query.page;
    const search = req.query.search;
    const postPerPage = 5;

    let filter = {}

    if(search){
        filter = {
            topic: {'$regex': `${search}`, '$options': 'i'}
        } 
    }
    const blogData = Blog.find(filter)
    if(page){
        blogData.skip(postPerPage*(page-1)).limit(postPerPage);
    }
    blogData.find().then(response => {
        res.status(201).json({
            status: "success",
            result: response
        })
    }).catch(err => {
        res.json(400).json({
            status: "Failed",
        })
    })
})


router.post('/blog', (req, res) => {
    const body = req.body
    
    const blog = new Blog({
        topic: body.topic,
        description: body.description,
        posted_at: body.posted_at,
        posted_by: body.posted_by
    });
    blog.save().then(response => {
        res.status(200).json({
            status: "Success",
            result: response
        })
    }).catch(err => {
        res.status(500).json({
            message: "Failure",
            err: err.message
        })
    })
});

router.put('/blog/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    
    Blog.findOneAndUpdate({
        _id: id
    }, updatedData).then(post => {
        if(!post){
            res.status(400).json({
                message:"Post Not Found"
            })
        }else{
            res.status(200).json({
                status: "Success",
                result: post
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: "Failure",
            err: err.message
        })
    })
});

router.delete('/blog/:id', (req, res) => {
    const id = req.params.id;
    Blog.deleteOne({
        _id:id
    }).then(post => {
        if(post.deletedCount){
            res.status(200).json({
                status: "Success",
                result: post
            })
        }else{
            res.status(400).json({
                message:"Post Not Found"
            })
        }
    }).catch(err => {
        res.status(500).json({
            message: "Failure",
            err: err.message
        })
    })
})

module.exports = router;