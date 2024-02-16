require('dotenv').config();

const productData = require('./data/ProductsData');

const connectDB = require('./config/db');

const Products = require('./models/ProductModel');
connectDB();

const importData = async () => {
	try {
		await Products.deleteMany({});
		await Products.insertMany(productData);
		console.log("Data import success");
		process.exit();
	} catch (error) {
		console.error("Error Data import");
		process.exit(1);
	}
}

importData();