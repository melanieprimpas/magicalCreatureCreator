import express from 'express';
import {
  getAllCreatures,
  getCreatureById,
  getCreatureByName,
  getCreatureByHabitat,
  getCreatureByAbility,
  getCreatureByUser,
  getStrength,
  getIntelligence,
  getAgility,
  updateCreature,
  createCreature,
  deleteCreature,
} from '../controllers/creatureController.js';
import {
  getAllHabitats,
  getHabitatById,
  getHabitatByName,
  getHabitatByCreature,
  updateHabitat,
  createHabitat,
  deleteHabitat,
} from '../controllers/habitatController.js';
import {
  getAllAbilities,
  getAbilityById,
  createAbility,
  deleteAbility,
} from '../controllers/abilityController.js';
import {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
} from '../controllers/userController.js';

import authRoute from './auth.js';

const router = express.Router();

// Creature routes
router.get('/creatures', getAllCreatures);
router.get('/creatures/:id', getCreatureById);
router.get('/creatures/name/:name', getCreatureByName);
router.get('/creatures/habitat/:habitat', getCreatureByHabitat);
router.get('/creatures/ability/:ability', getCreatureByAbility);
router.get('/creatures/user/:user', getCreatureByUser);
router.get('/creatures/strength/:strength', getStrength);
router.get('/creatures/intelligence/:intelligence', getIntelligence);
router.get('/creatures/agility/:agility', getAgility);
router.put('/creatures/:id', updateCreature);
router.post('/creatures', createCreature);
router.delete('/creatures/:id', deleteCreature);

// Habitat routes
router.get('/habitats', getAllHabitats);
router.get('/habitats/:id', getHabitatById);
router.get('/habitats/name/:name', getHabitatByName);
router.get('/habitats/creature/:creature', getHabitatByCreature);
router.put('/habitats/:id', updateHabitat);
router.post('/habitats', createHabitat);
router.delete('/habitats/:id', deleteHabitat);

// Ability routes
router.get('/abilities', getAllAbilities);
router.get('/abilities/:id', getAbilityById);
router.post('/abilities', createAbility);
router.delete('/abilities/:id', deleteAbility);

// User routes
router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);


router.use('/auth', authRoute);

export default router;