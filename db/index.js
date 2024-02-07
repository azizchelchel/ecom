import mongoose from "mongoose";
const db_url = 'http://'
mongoose.connect(db_url, {})
.then(
    () => { 
        console.log('connected to data base successfully!');
     }
)
.catch(
    (error) => { 
        console.log(error);
     }
)