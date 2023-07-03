const work_model = require('../model/workDone');

exports.AddWorkDone = (req,res,next)=>{
    try{
        console.log("AWD");
    const work = req.body.work
    const description = req.body.description;
    const data = work_model.create({work:work,description:description});
    res.status(209).json({newWorkData:data})    
    }catch(err){
    console.log(err);
    }
}

exports.getWorkDone = (req,res,next)=>{
    work_model.findAll()
    .then((work)=>{
        res.status(211).json(work);
    })
    .catch((err)=>{
        console.log(err);
        res.status.json({err:err});
    })
    }