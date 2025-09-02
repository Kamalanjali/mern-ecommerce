import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
{
name: { type: String, required: true },
description: { type: String },
price: { type: Number, required: true },
images: [{ type: String }],
brand: String,
category: String,
stock: { type: Number, default: 0 },
rating: { type: Number, default: 0 },
numReviews: { type: Number, default: 0 }
},
{ timestamps: true }
);
export default mongoose.model('Product', productSchema);