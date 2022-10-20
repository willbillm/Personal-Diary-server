import mongoose from 'mongoose';

const entrySchema = mongoose.Schema({
    title: String,
    date: String,
    writing: String,
    
});

const entry = mongoose.model('entry', entrySchema)

export default entry;