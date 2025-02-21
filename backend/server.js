import express from 'express';
import dotenv from 'dotenv';
import dbConnect from './config/db.js'
import product from './model/theSchema.js'
import mongoose from 'mongoose';

dotenv.config();

const app=express();
app.use(express.json());

const port = 5001;


app.get('/', (req,res)=>{

    res.send('Hello World!');
}
);


app.post('/product', async (req, res) => {
    const newProduct = new product(req.body);
    if(!newProduct){
        return res.status(400).send('Invalid product data');
        console.log("new product not available");
    }

    const newnewProduct = new product(newProduct);

    try {
        await newnewProduct.save();
        res.status(201).json({success:true, data:newnewProduct});
        
    } catch (error) {
        res.status(400).json({success:false, message: "server error"});
        console.log("error in creating product");
        
    }
});


app.get('/api/products', async (req,res) => {
    try {

        const products = await product.find();
        res.status(200).json({success:true, data:products});
        
    } catch (error) {
        console.log("error in getting product");
        res.status(400).json({success:false, message: "error in getting products"});
        
    }
})

app.delete('/api/products/:id', async (req,res) => {
    const {id} = req.params;
    try {
        await product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "product deleted successfully"});
        
    } catch (error) {
        console.log("error in deleting product");
        res.status(400).json({success:false, message: "error in deleting product"});
        
    }

})

app.put('/api/products/:id', async (req,res) =>{
    const {id} = req.params;

    const product = req.body;



    if(!mongoose.Types.ObjectId.isValid(id)){
        console.log("Invalid product ID");
        return res.status(400).json({success : false , message: 'Invalid product ID'});


    }

 

    try {
        const updatedProduct = await product.findByIdAndUpdate(id, product, {new:true, runValidators:true});

        res.status(200).json({success:true, data: updatedProduct});
        
    } catch (error) {
        console.log("error in updating product");
        res.status(400).json({success:false, message: "error in updating product"});
        
    }

})

app.listen(port, () => {
    dbConnect();
    console.log(`Server running on port ${port}`);
})