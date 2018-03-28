import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import entrepriseCtrl from '../controllers/entreprise.controller';

const router = express.Router(); // eslint-disable-line new-cap

router
  .route('/')
  /** GET /api/entreprise - Get list les entreprises */
  .get(entrepriseCtrl.list)

  /** POST /api/users - ajouter une nouvelle entreprise */
  .post(validate(paramValidation.createEnt), entrepriseCtrl.create);

export default router;
