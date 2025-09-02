import 'dotenv/config';
import Product from './models/productModel.js';
import connectDB from './config/db.js';


const sample = [
{ name: 'T‑Shirt', description: 'Cotton tee', price: 499, stock: 100,
brand: 'Acme', category: 'Apparel' },
{ name: 'Sneakers', description: 'Comfy kicks', price: 2999, stock: 50,
brand: 'Volt', category: 'Shoes' },
];
(async () => {
await connectDB(process.env.MONGO_URI);
await Product.deleteMany({});
await Product.insertMany(sample);
console.log(' Seeded');
process.exit(0);
})();