import mongoose from 'mongoose';
const cardSchema=mongoose.Schema({
    name:String,
    imageUrl:String
})
export default mongoose.model('cards',cardSchema);