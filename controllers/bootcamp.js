const Bootcamp = require('../models/Bootcamp')

// Desc     Get All Bootcamps
// Router   GET /api/v1/bootcamp
// Access   Public
exports.getBootcamps = async (req, res, next) =>{
    try {
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success:true, data: bootcamps})
    } catch (error) {
        res.status(400).json({success: false})
    }
}

// Desc     Get Single Bootcamps
// Router   GET /api/v1/bootcamp/:id
// Access   Public
exports.getBootcamp =  (req, res, next) =>{
    res.status(200).json({ success: true, msg: `Get Bootcamps ${req.params.id}`});
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
    } catch (error) {
        res.status(400).json({Success: false})   
    }
}

// Desc     Update Bootcamps
// Router   PUT /api/v1/bootcamp/:id
// Access   Private
exports.updateBootcamp =  (req, res, next) =>{
    res.status(200).json({ success: true, msg: `Update Bootcamps ${req.params.id}`});
   
    
}

// Desc     Delete Bootcamps
// Router   Delete /api/v1/bootcamp/:id
// Access   Private
exports.deleteBootcamp =  (req, res, next) =>{
    res.status(200).json({ success: true, msg: `Delete Bootcamps ${req.params.id}`}); 
    
}