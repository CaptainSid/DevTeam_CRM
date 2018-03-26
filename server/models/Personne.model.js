import mongoose from "mongoose";
require("mongoose-type-url");
var Personne = new mongoose.Schema({
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
  fonction: {
    type: String,
    required: true
  },
  CV: {
    type: mongoose.SchemaTypes.Url,
    required: yes
  }
});

/**
 * @typedef Personne
 */
export default mongoose.model("Personne", Personne);
