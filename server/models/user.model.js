import mongoose from 'mongoose';


/**
 * User Schema
 */
const Funcs = ['admin', 'utilisateur'];
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
