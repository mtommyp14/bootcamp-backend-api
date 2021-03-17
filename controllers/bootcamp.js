const Bootcamp = require('../models/Bootcamp')

// Desc     Get All Bootcamps
// Router   GET /api/v1/bootcamp
// Access   Public
exports.getBootcamps = async (req, res, next) =>{
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success:true, count: bootcamps.length, data: bootcamps})
    } catch (err) {
        res.status(400).json({success: false})
    }
}

// Desc     Get Single Bootcamps
// Router   GET /api/v1/bootcamp/:id
// Access   Public
exports.getBootcamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        if(!bootcamp){
            return res.status(400).json({success: false})
        }

        res.status(200).json({success: true, data: bootcamp})
    } catch (err) {
        next(err);
    }
    
}

// Desc     Create New Bootcamps
// Router   POST /api/v1/bootcamp
// Access   Private
exports.createBootcamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.create(req.body);
        res.status(200).json({
            success: true,
            data: bootcamp
        })
    } catch (err) {
        res.status(400).json({Success: false})   
    }
}

// Desc     Update Bootcamps
// Router   PUT /api/v1/bootcamp/:id
// Access   Private
exports.updateBootcamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
    
        if(!bootcamp){
            return res.status(400).json({success: false})
        }
        
        res.status(200).json({success: true, data: bootcamp})
        
    } catch (err) {
        res.status(400).json({success: false})
    }
}

// Desc     Delete Bootcamps
// Router   Delete /api/v1/bootcamp/:id
// Access   Private
exports.deleteBootcamp = async (req, res, next) =>{
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
    
        if(!bootcamp){
            return res.status(400).json({success: false})
        }
        
        res.status(200).json({success: true, data:{Description: bootcamp.name + " has been delete"}})
        
    } catch (err) {
        res.status(400).json({success: false})
    }
}