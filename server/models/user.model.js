import mongoose from 'mongoose';


/**
 * User Schema
 */
const Funcs = ['superadmin', 'admin', 'user'];
const Sexe = ['masculin', 'feminin'];
const UserSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique:true,
    trim:true,
    required: true
  },
  motDePasse: {
    type: String,
    required: true
  },
  cle:{
    type:String,
    required: true
  },
  sexe: {
    type: String,
    enum:Sexe,
    required: true
  },
  role: {
    type: String,
    enum:Funcs,
    required: true
  }
});


/**
 * @typedef User
 */
export default mongoose.model('User', UserSchema);
