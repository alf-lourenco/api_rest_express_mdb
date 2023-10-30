import mongoose, { mongo } from "mongoose";


// na url mongodb+srv://admin:123@cluster0.8x4a5da.mongodb.net/<nomeDataBase>?retryWrites=true&w=majority"

async function conectaNaDatabase() {
   mongoose.connect(process.env.DB_CONNECTION_STRING);
   return mongoose.connection;
}

export default conectaNaDatabase;

// mongodb+srv://Alfredo:<password>@cluster0.k184vyk.mongodb.net/?retryWrites=true&w=majority