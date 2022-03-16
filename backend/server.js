const dotenv = require('dotenv');
dotenv.config();
const AWS=require('aws-sdk');
const s3=new AWS.S3();

// (async()=>{
//     await s3
//     .putObject({
//         Body:'Hello World',
//         Bucket:'saloni-searce-uploads',
//         Key:'./images/trial_img_s3_bucket.jpeg'
//     })
//     .promise();
    
// })();

const connectToDatabase=require('./config/db')
connectToDatabase(process.env.MONGO_URI)



const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const PORT=process.env.PORT

app.use('/vendor',require('./routes/vendorRoutes'))
app.use('/venue',require('./routes/venueRoutes'))
app.use('/categories',require('./routes/categoryRoutes'))
app.use('/item',require('./routes/itemRoutes'))
app.use('/event',require('./routes/eventRoutes'))

app.listen(process.env.PORT,()=>{
    console.log(`Port started: ${PORT}`)
})
