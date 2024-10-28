import { User, Habitat, Ability, Creature, UserCreature } from '../models/index.js';
import sequelize from '../config/connection.js';

import bcrypt from 'bcrypt';



const seedDatabase = async () => {
  try {
    // Sync the database
    await sequelize.sync({ force: true });

    // Seed data for habitats
    const habitats = await Habitat.bulkCreate([
      { name: 'Forest', description: 'A dense forest with tall trees.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BItYmKVfPhHBIJb28BIC_bZ45FrcKspzhbHrYYaXhKJax5XzpJqifgfD1wkQ0PVFbH_r4Pl2vvXVNHV8SyLt1QZXKdOKAkspmvvBSsEFcjG7bD2YlVycaszkYhM8R9utE1bTvA3LBMQF7wWyQzgzXDafbCEps-jcpbGz0zlLELlfXyI3fSE' },
      { name: 'Desert', description: 'A hot and dry desert.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIv012KxKt6xweGsNxdkYZZdNpTf2JytLvv6KiEPyTiizoFOpeNI6DNApuy-0MrmjWT2hs_B3c7HBOLkA92FkDTATu2-_G3m-c3nNt0h-xO_e5O8XRW3ZXW19XaqEe_8diRoNu-fMvRVebZjT07YUXByfPhWgSSHjnzHEihqWSWau7YIxAt8' },
      { name: 'Ocean', description: 'A vast and deep ocean.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIscf7A8Q_eQi3NJQO2RsAUL1QPTFifrFBE5nq7sXl_0U48LszYoBD_3kvF1kWcMWfxmprZKCOfrkQraO3KRWahnS8KSFbbd3epQk7pLd240H_4ddd0RMlHy7b3-oGFSbpajyZlKgK8c6y2OFNPXtrafUbcw5Av9eXEv5R88U7RbCLB-fb2J' },
      { name: 'Mountain', description: 'A tall and rocky mountain.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIsWW3_sey5t5Nb7_bmhkjHztAbOuPGdQjY_R0ngnuHqiAToUMs-1-lCYpbjyiWAzrtOPR39EtrXaAglR-pqNUr6QuS6SWJi6S2Edxtx3ICVrinxAiNKYXeMK5gLtaL5pmFU_wxFmOEoeTwvSKw2MUrhjC4h3jJOxpZCuSwAUrakv-E6bfAE' },
      { name: 'Cave', description: 'A dark and damp cave.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIsFTPNbaiq5gs1bwv2nNZ2bfIpJcQ06fXfUJ3GrZUhJ-gLjdf96MYhk7gTFSlIqOKRQYcUOvUyhTjenpZ6IyzS8IFqZpI8sjf4HSZM3yQg-at7nMg1E5WEY06oSoolAtKcIj3ryt9V5rE4FPphUtBB1YSkQiJZX2moeZJtrChxEwyKKKU4' },
      { name: 'Grassland', description: 'A wide and open grassland.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BItHJPavm0J0Ww0HWMrZkNcpqv8Lh-nPFehQaUpBmH1Zzs0hMo2HhCVR_0T02u2T9I_NBJ95o7L9A94FVEJNheA9Jnl6CJspogii0AxxGsb2GLYuZqXo_VLFZ-fKa14hTh-m1ttwBKk_PuJH5_pQweEzwReEbGLUGGfIBVj8pB2To9VxAIgm' },
      { name: 'Swamp', description: 'A wet and muddy swamp.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BItbSHyVxr1FziOfmhG_A1NVcgT_sdWUnFVOF2EBFV_CWuFmOHgVDoGkgaSO3F27HxDBNGAverdHYGUW70q6c6JwLyTjxbSZE8U3sqGi3EXkk8KzBTExuRh0LU4QcSiCcnNdk-KTiwaJCYqH2U-_gJZAG0FT1fnz2keobRXvJfm4nxS7DCUG' },
      { name: 'Tundra', description: 'A cold and icy tundra.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIvqwIR2L3reUouFK3_6DhON6Efec__yuQokBHCGmfBwgBrLeCq1YfeR6OH-3Yg_Y2Xoa-y4PGp-8Oza4X0O1cwGkbNBb_gEW54I3kgFSGP1grjeP2eOwpRvyTJkrZYoMJ7w7FZHPnIwUC3Ggs_jyJmvjIW_Y13Fy2FkqgjbAYdtzzQVKIm_' },
      { name: 'Volcano', description: 'A fiery and dangerous volcano.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIssUOAKeiXGA9CVjtwpyB61QH6434XScnK6fhUJw2pRamFZ6yT5H37Sa-Ozj84aiOsN7JAIyQZGJ4LxeVP0Y2KAwtG6fZ46A_1m19rmweSXkNBXsElSXnPcnVxKvEKua0pZQpPtSg38UuKoThQEYyd8VwUm4Kmr3tgLbGDpEmhcGD1Pd9l3' },
      { name: 'Island', description: 'A small and isolated island.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIvyIBi8-NssTip_pklbBw3H0LiSYVBOn_dBaZ7p6TswGAVRCaQfNSc1SyNpnVLYLcJuTE-E0SEsAVNPS7xLq6ckLlGySMui9JAgmf1pw77pLulJsutE_9h4ZmRKelBCMrkv4y4l7oZ1sTfiUCSitiMU4vsX5G2EEDtmPp70BQgLANnBtxNb' },
      { name: 'Jungle', description: 'A lush and tropical jungle.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIsKkqotaOsfXCg30uiAEHpwbIrjXpQfmgWkV2fC-wfYjWItZWGOUhJcXk6y3DdGmpa0es-IpATgNjvy02igo6hPWqCQ4GX6MpCWqySblKY3OuMkUraWmy1E8MOcsPcQBg094RjZ5I6LxSh3bhDBfNK8BNHJ98BCqPN34M-MMLwjMSah1VQQ' },
      { name: 'Savannah', description: 'A dry and grassy savannah.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIsCQqeyxcuU-CYJ-0V7eDL33LcUJV4yoPRM3CdFNrZ6ArYb42-i4i80ZDplWb99lx0AvXpFVUF_2DwIbXmX3HYnlmS5SecSNk410-w8SSN6bE0V-v0-NVfvlB2e75Om-UfdaQNJLtPlugqwcQQvw1M7WJchbHa9NEyvNSla2yGtuX44MoTv' },
      { name: 'Urban', description: 'A busy and crowded city.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIucKHWw3qCz7WCoKnxfk94f3T7EqmITt7bxg5LBS5cnFbJxnDs56bnmKCfiDMsxP1xWOOyw-J0-fmpikMadVQCEnPzutIA_KXJwyHE6nqCM6wjhnb_6glZmXS-8XMMlWq2iaryn1jP3RKNo-AVA6QWN9rMb2N9W6H9X-STwdiTRIx6HasE' },
      { name: 'Suburban', description: 'A quiet and peaceful suburb.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIuO8KZq5M2YYFO9cnP4Rr99v4PSoSxJD3dCCfA1YgUP-THcVRGvwqDSBL0BN5deR9OCsar6vpLP94c-n2FSSz39EGZAURu1HdNus_FvQYU3eFqbUBKYpj1YD2Sl_DXOLhNGj9zl3jpvgp71Y4I5Kxp0ug-Lfl4VWAYCZeqvjZwDDUFY9noz' },
      { name: 'Rural', description: 'A calm and serene countryside.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIsAmj_Zkmt8PBvbDTP108BqG-eUlc0V-AciiTUVKdHCX_gdPMg4gLVr2MNKNShQ0HKoyQH3eYyXK-H1MEe2YusKlWPcVKxd0HzD78sKlo_0AoJUfhUNI9u1gidnuZyLSsfsfrk-wp4ynkDeC-0OQQ8Ezj5q-A9oxrY8nDRI_tTTd5Kksqg9' },
      { name: 'Underwater', description: 'A mysterious and dark underwater world.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BItUj1DwA_l98x8LodqNu7Q5RouHhY396C-OGOjDAHzE25J15tuaXSXzY9EEFPqVc1g_JJ9JccvAa6j45pMSf5eBnpBE4nS226HIDqGcPgVO2fMiXL_6s9EC1voYhwDDy1nSDDb4TvjA4XUmp851dOFCNJz7fkospYBjYYVnZUwKoOiHYVF_' },
      { name: 'Space', description: 'A vast and empty space.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BItWldeexDSUYS0upHNklWsfyBXIXXcKfZ3B6JA3_1sdC0Kh3CAlslQxsmoA3uxFXoZPuRYb8VAoA8IHzGAkzq9aJcB7Ha6Exe978OG13f4d8yB3BCIeS5wWrK8N8iSQdtIWDTbZbazlWsDNidpQuEno0YWHOaINo8v2CmaEt6eA21TVTAQa' },
      { name: 'Sky', description: 'A high and open sky.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIsMsLhrY5v0V_1Qaii-UVqTjQpM0PS18-9fgGG1se8eSKfNmiISFAs0Iu_x3tClrQa2u4-b_lHJEW64tBxri-pmByyQQsxGvvrvm9zBSHANd14-G6dk6ZTSX_Nm5e9o4C2dgxlDOIeJsOWlPbo5BV07xe9rCmPmvVF7ycclyyhUTo0GkE8K' },
      { name: 'Dimensional', description: 'A strange and unknown dimension.', habitat_url:'https://lh3.googleusercontent.com/gg/ACM6BIvny80pUaYscv8TLKlpaYGQzpk3-oN_iH7bI5W0GyJTqY1FrHVlzcfPU84eKx6bk-uClsp5w-Q7q3ZgupVLJBGm1v3Ip96fQEMwGtNesIl3ArttpvezWFSPINpxljqdXiFz47OHdg0mj3lRfneFUTasQ5pYMHfF5Oc7qOch_firQ5V5VYiL' },
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
      { name: 'Dragon', description: 'A large and powerful winged reptile.', image_url: 'https://cdn.pixabay.com/photo/2024/05/08/10/08/mountains-8747925_640.jpg', habitats_name: habitats[0].name, habitat_image: habitats[0].habitat_url, abilities_name: abilities[2].name, strength: 5, intelligence: 4, agility: 3 },
      { name: 'Phoenix', description: 'A mythical bird that regenerates from its ashes.', image_url: 'https://cdn.pixabay.com/photo/2024/04/20/19/38/ai-generated-8709303_1280.png', habitats_name: habitats[1].name, habitat_image: habitats[1].habitat_url, abilities_name: abilities[1].name, strength: 3, intelligence: 5, agility: 4 },
      { name: 'Mermaid', description: 'A creature with the upper body of a human and the tail of a fish.', image_url: 'https://cdn.pixabay.com/photo/2024/05/22/10/56/ai-generated-8780350_640.png', habitats_name: habitats[2].name, habitat_image: habitats[2].habitat_url, abilities_name: abilities[0].name, strength: 3, intelligence: 3, agility: 5 },
      { name: 'Unicorn', description: 'A magical horse with a single horn on its forehead.', image_url: 'https://cdn.pixabay.com/photo/2024/04/10/13/40/ai-generated-8688076_640.jpg', habitats_name: habitats[3].name, habitat_image: habitats[3].habitat_url, abilities_name: abilities[6].name, strength: 2, intelligence: 4, agility: 5 },
      { name: 'Griffin', description: 'A legendary creature with the body of a lion and the head and wings of an eagle.', image_url: 'https://cdn.pixabay.com/photo/2020/01/29/18/56/being-4803333_640.jpg', habitats_name: habitats[4].name, habitat_image: habitats[4].habitat_url, abilities_name: abilities[2].name, strength: 5, intelligence: 4, agility: 3 },
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