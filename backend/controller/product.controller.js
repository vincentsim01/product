import express from 'express';
import mongoose from 'mongoose';
import product from '../model/theSchema.js';




export const getProducts = async (req,res) => {
    try {

        const products = await product.find();
        res.status(200).json({success:true, data:products});
        
    } catch (error) {
        console.log("error in getting product");
        res.status(400).json({success:false, message: "error in getting products"});
        
    }
}

export const createProducts = async (req, res) => {
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
}

export const deleteProducts = async (req,res) => {
    const {id} = req.params;
    try {
        await product.findByIdAndDelete(id);
        res.status(200).json({success:true, message: "product deleted successfully"});
        
    } catch (error) {
        console.log("error in deleting product");
        res.status(400).json({success:false, message: "error in deleting product"});
        
    }

}

export const putProducts = async (req,res) =>{
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

}