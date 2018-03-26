import mongoose from "mongoose";

var Etudiant = new mongoose.Schema({
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
  Telephone: {
    type: String,
    required: true
  },
  Etablissement: {
    type: String,
    required: true
  },
  anneeEtude: {
    type: String,
    required: true
  },
  Specialité: {
    type: String,
    required: true
  },
  Adress: {
    type: String,
    required: true
  }
});

/**
 * @typedef Etudiant
 */
export default mongoose.model("Etudiant", Etudiant);
