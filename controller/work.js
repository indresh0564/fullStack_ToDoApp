const work_model = require('../model/work');

exports.AddWork = async(req,res,next)=>{
    try{
    const work = req.body.work
    const description = req.body.description;
    const data = await work_model.create({work:work,description:description});
    res.status(201).json({newWorkData:data})    
    }catch(err){
    console.log(err);
    }
}

exports.getWork = (req,res,next)=>{
work_model.findAll()
.then((work)=>{
    res.status(202).json(work);
})
.catch((err)=>{
    console.log(err);
    res.status.json({err:err});
})
}

exports.deleteWork = async (req,res,next)=>{
    const workId = req.params.workId;
    console.log(workId);
    await work_model.destroy({where:{id:workId}});
    res.status(205).json({deletedWorkId:workId});
}
