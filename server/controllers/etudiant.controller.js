import Etudiant from '../models/Etudiant.model';

function create(req, res, next) {
  const Etud = new Etudiant({
    Nom: req.body.nom,
    Prenom: req.body.prenom,
    email: req.body.email,
    Telephone: req.body.telephone,
    Etablissement: req.body.etablissement,
    anneeEtude: req.body.annee,
    Specialité: req.body.specialité,
    Adress: req.body.adress
  });
  Etud.save()
    .then(savedEtud => res.json(savedEtud))
    .catch(e => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
  Etudiant.find({})
    .then(etuds => res.json(etuds))
    .catch(e => next(e));
}
export default { create, list };
