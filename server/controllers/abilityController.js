import Ability from '../models/ability.js';

// Get all abilities
export const getAllAbilities = async (req, res) => {
  try {
    const abilities = await Ability.findAll();
    res.json(abilities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get ability by ID
export const getAbilityById = async (req, res) => {
  try {
    const ability = await Ability.findByPk(req.params.id);
    if (!ability) {
      return res.status(404).json({ error: 'Ability not found' });
    }
    res.json(ability);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Get ability by 
// Create new ability
export const createAbility = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newAbility = await Ability.create({ name, description });
    res.status(201).json(newAbility);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete ability
export const deleteAbility = async (req, res) => {
  try {
    const ability = await Ability.findByPk(req.params.id);
    if (!ability) {
      return res.status(404).json({ error: 'Ability not found' });
    }
    await ability.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};