const express = require('express');
const mongoose = require("mongoose")
const cors = require('cors')
const app = express();
const path = require('path');
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000
const url =  process.env.MONGODB_URI || "mongodb+srv://deepak:Dipak@1243@cluster0.o7rmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }).then((res)=>{
    console.log("we have a new connection")
}).catch((err)=>{
    console.log(err);
})
require("./models/index")
require("./models/posts")
const router = app.use(require("./routing/router"))

// step 3 for heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static("Client/build"));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'Client' , 'build', 'index.html')); 
    });
}

router.listen(PORT,(req,res)=>{
    console.log(`server running at port ${PORT}`)
})