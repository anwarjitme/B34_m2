const mongoose=require("mongoose")
const connection=mongoose.connect("mongodb+srv://anwarjitme:anwarjitme@cluster0.wdgpysq.mongodb.net/masai_dbs?retryWrites=true&w=majority&appName=Cluster0",
{ useNewUrlParser: true, useUnifiedTopology: true })
module.exports={
    connection
}
