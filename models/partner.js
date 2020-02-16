const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    }, 
    image: {
        type: String, 
        required: true
    }, 
    feature: {
        type: Boolean, 
        default: false
    }, 
    description: {
        type: String, 
        required: true
    }, 
    // createdAt: {
    //     type: Date, 
    //     default: Date.now
    // }, 
    // updatedAt: {
    //     type: Date,
    //     default: Date.now
    // }
}, {
    timestamps: true 
}); 

const Campsite = mongoose.model('Partner', partnerSchema);

module.exports = Partner; 