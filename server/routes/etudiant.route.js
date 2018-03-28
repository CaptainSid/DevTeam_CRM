import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import etudiantCtrl from '../controllers/etudiant.controller';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/entreprise - Get list les entreprises */
  .get(etudiantCtrl.list)

  /** POST /api/users - ajouter une nouvelle entreprise */
  .post(validate(paramValidation.createEtud), etudiantCtrl.create);

export default router;
