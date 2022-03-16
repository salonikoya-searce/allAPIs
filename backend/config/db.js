const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
            const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        
        console.log(`Database running at ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error while connecting with Database${error}`);
        process.exit(1)
    }
    
}

module.exports = connectToDatabase