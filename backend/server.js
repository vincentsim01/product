import express from 'express';
import dotenv from 'dotenv';

const app=express();
const port = 5001;


app.get('/', (req,res)=>{
    res.send('Hello World!');
}
);



app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})