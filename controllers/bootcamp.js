// Desc     Get All Bootcamps
// Router   GET /api/v1/bootcamp
// Access   Public
exports.getBootcamps =  (req, res, next) =>{
    res.status(200).json({ success: true, msg: "Show All Bootcamps"});

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
exports.createBootcamp =  (req, res, next) =>{
    res.status(200).json({ success: true, msg: `Create New Bootcamps `});
   
    
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