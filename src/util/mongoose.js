export const multipleMongooseObject = (mongooseArrays) => {
    return mongooseArrays.map(mongooseArray => mongooseArray.toObject())
}

export const mongooseToObject = (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
}

// export default { multipleMongooseObject, mongooseToObject };