import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    id: ObjectId,
    name: { type: String, minLength: 255 },
    description: { type: String, minLength: 255 },
    feature_image: { type: String, minLength: 255 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

export default mongoose.model('Course', Course);