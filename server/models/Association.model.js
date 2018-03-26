import mongoose from "mongoose";

var Personne = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  prenom: {
    type: String,
    required: true
  },

  mail: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});
var Association = new mongoose.Schema({
  Nom: {
    type: String,
    required: true
  },
  Prenom: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  domaine: {
    type: String,
    required: yes
  },
  contact:{
      type:[Personne],
      required:true
  }
});

/**
 * @typedef Association
 */
export default mongoose.model("Association", Association);
