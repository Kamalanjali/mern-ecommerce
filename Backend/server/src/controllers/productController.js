import Product from '../models/productModel.js';
export const listProducts = async (req, res, next) => {
try {
const products = await Product.find().limit(50).sort({ createdAt: -1 });
res.json(products);
} catch (err) { next(err); }
};
export const getProduct = async (req, res, next) => {
try {
const p = await Product.findById(req.params.id);
if (!p) return res.status(404).json({ message: 'Product not found' });
res.json(p);
} catch (err) { next(err); }
};
