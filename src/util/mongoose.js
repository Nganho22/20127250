module.exports ={
    mutipleMongooseToObject: function(mongooses){
        return mongooses.map
        (mongoose => mongoose.toObject())
    },
    mongooseToOBject: function(mongoose){
        return mongoose ? mongoose.toObject(): mongoose
    }
}