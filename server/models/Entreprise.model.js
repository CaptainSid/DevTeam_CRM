import mongoose from "mongoose";

var t = new mongoose.Schema({
  activité: String
});
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
  fonction: {
    type: String,
    required: true
  }
});
var EntrepriseSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  domaine: {
    type: String,
    required: true
  },
  activités: {
    type: [t],
    required: true
  },

  statutCommercial: {
    type: String,
    required: true
  },
  statutJuridique: {
    type: String,
    required: true
  },
  anneeDeCréation: {
    type: Date,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  siteweb: {
    type: String,
    required: true
  },
  présentationDeLEntreprise: {
    type: String,
    required: true
  },
  contact: {
    type: [Personne],
    required: true
  }
});

/**
 * @typedef Entreprise
 */
export default mongoose.model("Entreprise", EntrepriseSchema);
