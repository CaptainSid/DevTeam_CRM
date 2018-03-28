import Entreprise from '../models/Entreprise.model';

/**
 * Ajouter une nouvelle entreprise
 * @returns {User}
 */
function create(req, res, next) {
  const Ent = new Entreprise({
    nom: req.body.nom,
    logo: req.body.logo,
    domaine: req.body.domaine,
    activités: req.body.activités,
    statutCommercial: req.body.statutCommercial,
    statutJuridique: req.body.statutJuridique,
    anneeDeCréation: req.body.anneeDeCréation,
    adresse: req.body.adresse,
    siteweb: req.body.siteweb,
    présentationDeLEntreprise: req.body.présentationDeLEntreprise,
    contact: req.body.contact
  });
  Ent.save()
    .then(savedEnt => res.json(savedEnt))
    .catch(e => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  Entreprise.find({})
    .then(ents => res.json(ents))
    .catch(e => next(e));
}

export default { create, list };
