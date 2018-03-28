import Joi from 'joi';

export default {
  // POST /api/users
  createUser: {
    body: {
      nom: Joi.string().required(),
      prenom: Joi.string().required(),
      email: Joi.string().required(),
      motdepasse: Joi.string().required(),
      role: Joi.string().required()
    }
  },
  createEnt: {
    body: {
      nom: Joi.string().required(),
      logo: Joi.string().required(),
      domaine: Joi.string().required(),
      activités: Joi.array()
        .items(
          Joi.object({
            activité: Joi.string().required()
          })
        )
        .required(),
      statutCommercial: Joi.string().required(),
      statutJuridique: Joi.string().required(),
      anneeDeCréation: Joi.string().required(),
      adresse: Joi.string().required(),
      siteweb: Joi.string().required(),
      présentationDeLEntreprise: Joi.string().required(),
      contact: Joi.array()
        .items(
          Joi.object({
            nom: Joi.string().required(),
            prenom: Joi.string().required(),
            mail: Joi.string().required(),
            telephone: Joi.string().required(),
            fonction: Joi.string().required()
          })
        )
        .required()
    }
  },
  createEtud: {
    body: {
      nom: Joi.string().required(),
      prenom: Joi.string().required(),
      email: Joi.string().required(),
      telephone: Joi.string().required(),
      etablissement: Joi.string().required(),
      annee: Joi.string().required(),
      specialité: Joi.string().required(),
      adress: Joi.string().required()
    }
  },

  // UPDATE /api/users/:userId
  updateUser: {
    body: {
      username: Joi.string().required(),
      mobileNumber: Joi.string()
        .regex(/^[1-9][0-9]{9}$/)
        .required()
    },
    params: {
      userId: Joi.string()
        .hex()
        .required()
    }
  },

  // POST /api/auth/login
  login: {
    body: {
      username: Joi.string().required(),
      password: Joi.string().required()
    }
  }
};
