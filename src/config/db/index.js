import mongoose from 'mongoose';

async function connect()
{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/blog').then(() => console.log('connect success'));
    }
    catch (error) {
        console.log(error);
    }
}

export default {connect};