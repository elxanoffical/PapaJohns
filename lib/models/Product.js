import mongoose from "mongoose";

const productSchema =  new mongoose.Schema({
    title: {type: String, required: true},
    subTitle: {type: String, required: true},
})

export default mongoose.models.Product || mongoose.model('Product', productSchema)