const { default: mongoose } = require("mongoose")

//connects to the database:(mongodb)
const dbConnect = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://usermain:usermain@ivctajnid.wzmyiwe.mongodb.net/?retryWrites=true&w=majority', {})
         console.log(`MongoDB connected sucessfully`);
        return conn.connection; // Return the connection object

    } catch (error) {
        throw new Error(`Error connecting to the database: ${error}`);
    }
}
module.exports = dbConnect;