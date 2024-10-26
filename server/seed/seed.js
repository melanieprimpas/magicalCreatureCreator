import { User, Habitat, Ability, Creature, UserCreature } from '../models/index.js';
import sequelize from '../config/connection.js';

import bcrypt from 'bcrypt';



const seedDatabase = async () => {
  try {
    // Sync the database
    await sequelize.sync({ force: true });

    // Seed data for habitats
    const habitats = await Habitat.bulkCreate([
      { name: 'Forest', description: 'A dense forest with tall trees.' },
      { name: 'Desert', description: 'A hot and dry desert.' },
      { name: 'Ocean', description: 'A vast and deep ocean.' },
      { name: 'Mountain', description: 'A tall and rocky mountain.' },
      { name: 'Cave', description: 'A dark and damp cave.' },
      { name: 'Grassland', description: 'A wide and open grassland.' },
      { name: 'Swamp', description: 'A wet and muddy swamp.' },
      { name: 'Tundra', description: 'A cold and icy tundra.' },
      { name: 'Volcano', description: 'A fiery and dangerous volcano.' },
      { name: 'Island', description: 'A small and isolated island.' },
      { name: 'Jungle', description: 'A lush and tropical jungle.' },
      { name: 'Savannah', description: 'A dry and grassy savannah.' },
      { name: 'Urban', description: 'A busy and crowded city.' },
      { name: 'Suburban', description: 'A quiet and peaceful suburb.' },
      { name: 'Rural', description: 'A calm and serene countryside.' },
      { name: 'Underwater', description: 'A mysterious and dark underwater world.' },
      { name: 'Space', description: 'A vast and empty space.' },
      { name: 'Sky', description: 'A high and open sky.' },
      { name: 'Dimensional', description: 'A strange and unknown dimension.' },
    ]);

    // Seed data for abilities
    const abilities = await Ability.bulkCreate([
      { name: 'Invisibility', description: 'Can become invisible at will.' },
      { name: 'Flight', description: 'Can fly through the air.' },
      { name: 'Super Strength', description: 'Has extraordinary strength.' },
      { name: 'Teleportation', description: 'Can instantly move from one place to another.' },
      { name: 'Telekinesis', description: 'Can move objects with the mind.' },
      { name: 'Shape-shifting', description: 'Can change form at will.' },
      { name: 'Healing', description: 'Can heal wounds and injuries.' },
      { name: 'Mind Reading', description: 'Can read the thoughts of others.' },
      { name: 'Elemental Control', description: 'Can control the elements of nature.' },
      { name: 'Time Travel', description: 'Can travel through time.' },
      { name: 'Super Speed', description: 'Can move at incredible speeds.' },
      { name: 'X-ray Vision', description: 'Can see through objects.' },
      { name: 'Immortality', description: 'Cannot die or age.' },
      { name: 'Pyrokinesis', description: 'Can control fire with the mind.' },
      { name: 'Hydrokinesis', description: 'Can control water with the mind.' },
      { name: 'Electrokinesis', description: 'Can control electricity with the mind.' },
      { name: 'Animal Communication', description: 'Can communicate with animals.' },
      { name: 'Precognition', description: 'Can see the future.' },
      { name: 'Telepathy', description: 'Can communicate with others using the mind.' },
      { name: 'Intangibility', description: 'Can pass through solid objects.' },

    ]);

    // Seed data for creatures
    const creatures = await Creature.bulkCreate([
      { name: 'Dragon', description: 'A large and powerful winged reptile.', image_url: 'https://cdn.pixabay.com/photo/2024/05/08/10/08/mountains-8747925_640.jpg', habitats_id: habitats[0].id, abilities_id: abilities[2].id, strength: 5, intelligence: 4, agility: 3 },
      { name: 'Phoenix', description: 'A mythical bird that regenerates from its ashes.', image_url: 'https://cdn.pixabay.com/photo/2024/04/20/19/38/ai-generated-8709303_1280.png', habitats_id: habitats[1].id, abilities_id: abilities[1].id, strength: 3, intelligence: 5, agility: 4 },
      { name: 'Mermaid', description: 'A creature with the upper body of a human and the tail of a fish.', image_url: 'https://cdn.pixabay.com/photo/2024/05/22/10/56/ai-generated-8780350_640.png', habitats_id: habitats[2].id, abilities_id: abilities[0].id, strength: 3, intelligence: 3, agility: 5 },
      { name: 'Unicorn', description: 'A magical horse with a single horn on its forehead.', image_url: 'https://cdn.pixabay.com/photo/2024/04/10/13/40/ai-generated-8688076_640.jpg', habitats_id: habitats[3].id, abilities_id: abilities[6].id, strength: 2, intelligence: 4, agility: 5 },
      { name: 'Griffin', description: 'A legendary creature with the body of a lion and the head and wings of an eagle.', image_url: 'https://cdn.pixabay.com/photo/2020/01/29/18/56/being-4803333_640.jpg', habitats_id: habitats[4].id, abilities_id: abilities[2].id, strength: 5, intelligence: 4, agility: 3 },
    ]);

    // Seed data for users
    const hashedPasswords = await Promise.all([
      bcrypt.hash('password1', 10),
      bcrypt.hash('password2', 10),
      bcrypt.hash('password3', 10),
    ]);
    
    const users = await User.bulkCreate([
      { username: 'user1', email: 'user1@example.com', password: hashedPasswords[0] },
      { username: 'user2', email: 'user2@example.com', password: hashedPasswords[1] },
      { username: 'user3', email: 'user3@example.com', password: hashedPasswords[2] },
    ]);

    // Seed data for user_creatures
    await UserCreature.bulkCreate([
      { user_id: users[0].id, creature_id: creatures[0].id },
      { user_id: users[1].id, creature_id: creatures[1].id },
      { user_id: users[2].id, creature_id: creatures[2].id },
    ]);

    console.log('Database seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
};

seedDatabase();