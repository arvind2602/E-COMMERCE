import mongoose from 'mongoose';

const ProductSchema=mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    quantity:Number,
    category:String,
    image:String
})

export default mongoose.model('Product', ProductSchema);