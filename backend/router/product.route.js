import express from 'express';
const router = express.Router();
import { getProducts, createProducts, deleteProducts, putProducts } from '../controller/product.controller.js';


router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
})

router.get('/getproducts', getProducts);

router.post('/postproducts', createProducts);

router.delete('/:id', deleteProducts);

router.put('/:id', putProducts);

export default router;