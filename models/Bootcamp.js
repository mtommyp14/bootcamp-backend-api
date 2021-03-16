const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, 'Please add name'],
      unique: true,
      trim: true,
      maxlength: [50, 'Name can not be more than 50 character']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add name'],
        maxlength: [500, 'Description can not be more than 500 character']
    },
    website:{
        type: String,
        match: [ /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/ ,
                'Please use valid URL with HTTP or HTTPS'
        ]   
    },
    phone:{
        type: String,
        maxlength: [20, 'Phone number can not more than 20 number']
    },
    email:{
        type: String,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
                'Please add valid email'
        ]
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    location:{
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
            required: true
          },
          coordinates: {
            type: [Number],
            required: true,
            index: '2dsphere'
          },
          formattedAddresss: String,
          street: String,
          city: String,
          state: String,
          zipcode: String,
          country: String
    },
    careers:{
        type: [String],
        required: true,
        enum:[
            'Web Development',
            'Mobile Development',
            'UI/UX', 
            'Data Science',
            'Bussiness',
            'Others'
        ]
    },
    avarageRating:{
        type: Number,
        min:[1, 'Rating must be at least 1'],
        max:[10, 'Rating must can not be more than 10']
    },
    avarageCost:Number,
    photo:{
        type: String,
        default: 'no-photo.jpg'
    },
    housing:{
        type: Boolean,
        default: false
    },
    jobAssistance: {
        type: Boolean,
        default: false
    },
    jobGuarantee: {
        type: Boolean,
        default: false
    },
    acceptGi:{
        type: Boolean,
        default: false
    },
    createAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Bootcamp', BootcampSchema);