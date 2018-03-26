import mongoose from "mongoose";

const Type = ['Entreprise', 'Personne','Association'];
var Personne = new mongoose.Schema({
    emailDest:{
        type:String,
        required:true
    },
    Type:{
        type:String,
        enum:Type,
        required:true
    },
    dateEnvoi:{
        type:Date,
        required:true
    },
    messageEnvoye:{
        type:string,
        required:true
    }
});
