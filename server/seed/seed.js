import { User, Habitat, Ability, Creature, UserCreature } from '../models/index.js';
import sequelize from '../config/connection.js';

import bcrypt from 'bcrypt';

const seedDatabase = async () => {
  try {
    // Sync the database
    await sequelize.sync({ force: true });

    // Seed data for habitats
    const habitats = await Habitat.bulkCreate([
      { name: 'Forest', description: 'A dense forest with tall trees.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/8/87/Chiapas_Rainforest_crop.jpg'},
      { name: 'Desert', description: 'A hot and dry desert.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Rub_al_Khali_002.JPG/1024px-Rub_al_Khali_002.JPG' },
      { name: 'Mountain', description: 'A tall and rocky mountain.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/f/f0/Willow_Flats_area_and_Teton_Range_in_Grand_Teton_National_Park.jpg' },
      { name: 'Cave', description: 'A dark and damp cave.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/5/51/Son_Doong_Cave_5.jpg' },
      { name: 'Grassland', description: 'A wide and open grassland.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Nachusa_Grasslands_Spring_2016.jpg/800px-Nachusa_Grasslands_Spring_2016.jpg' },
      { name: 'Swamp', description: 'A wet and muddy swamp.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Cypresses.jpg/800px-Cypresses.jpg' },
      { name: 'Tundra', description: 'A cold and icy tundra.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tundra_in_Siberia.jpg/800px-Tundra_in_Siberia.jpg' },
      { name: 'Volcano', description: 'A fiery and dangerous volcano.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/4/48/Augustine_volcano_Jan_24_2006_-_Cyrus_Read.jpg' },
      { name: 'Island', description: 'A small and isolated island.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Na_Pali_Coast%2C_Kauai%2C_Hawaii.jpg/800px-Na_Pali_Coast%2C_Kauai%2C_Hawaii.jpg' },
      { name: 'Jungle', description: 'A lush and tropical jungle.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Tioman_Rainforest.JPG/800px-Tioman_Rainforest.JPG' },
      { name: 'Savannah', description: 'A dry and grassy savannah.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/5/5a/Tarangire-Natpark800600.jpg' },
      { name: 'Underwater', description: 'A mysterious and dark underwater world.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Great_Barrier_Reef_snorkeling_18.jpg' },
      { name: 'Sky', description: 'A high and open sky.', habitat_url:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Blue_Sky%2C_Dhaka%2C_Bangladesh.jpg/800px-Blue_Sky%2C_Dhaka%2C_Bangladesh.jpg' },
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
      { name: 'Dragon', description: 'A large and powerful winged reptile.', image_url: 'https://i.imgur.com/hUAlJsm.jpeg', habitats_name: habitats[0].name, habitat_image: habitats[0].habitat_url, abilities_name: abilities[2].name, strength: 5, intelligence: 4, agility: 3 },
      { name: 'Phoenix', description: 'A mythical bird that regenerates from its ashes.', image_url: 'https://i.imgur.com/E1VX9Bn.jpeg', habitats_name: habitats[1].name, habitat_image: habitats[1].habitat_url, abilities_name: abilities[1].name, strength: 3, intelligence: 5, agility: 4 },
      { name: 'Mermaid', description: 'A creature with the upper body of a human and the tail of a fish.', image_url: 'https://i.imgur.com/8sIl8vR.jpeg', habitats_name: habitats[11].name, habitat_image: habitats[11].habitat_url, abilities_name: abilities[0].name, strength: 3, intelligence: 3, agility: 5 },
      { name: 'Unicorn', description: 'A magical horse with a single horn on its forehead.', image_url: 'https://i.imgur.com/XBnUSkY.jpeg', habitats_name: habitats[12].name, habitat_image: habitats[12].habitat_url, abilities_name: abilities[6].name, strength: 2, intelligence: 4, agility: 5 },
      { name: 'Griffin', description: 'A legendary creature with the body of a lion and the head and wings of an eagle.', image_url: 'https://i.imgur.com/AkOgTg1.jpeg', habitats_name: habitats[4].name, habitat_image: habitats[4].habitat_url, abilities_name: abilities[2].name, strength: 5, intelligence: 4, agility: 3 },
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
