INSERT INTO users (username, password) VALUES
                                           ('admin', 'password'),
                                           ('user1', '12345'),
                                           ('user2', 'qwerty');

INSERT INTO habitats (name, description) VALUES
                                             ('Forest', 'A dense growth of trees and shrubs'),
                                             ('Mountain', 'A natural elevation of land higher than a hill'),
                                             ('Ocean', 'A large body of saltwater covering most of the Earth'),
                                             ('Desert', 'A dry, barren region with little or no vegetation');

INSERT INTO abilities (name, description) VALUES
                                              ('Fireball', 'Shoots a fireball at the enemy'),
                                              ('Ice Blast', 'Freezes enemies with a blast of ice'),
                                              ('Lightning Strike', 'Strikes enemies with lightning'),
                                              ('Healing', 'Heals the user or allies');

INSERT INTO creatures (name, description, image_url, habitats_id, abilities_id) VALUES
                                                                      ('Phoenix', 'A mythical bird that can regenerate from ashes', 'phoenix.jpg', 1, 1),
                                                                      ('Unicorn', 'A mythical horse with a single horn on its forehead', 'unicorn.jpg', 1, 4),
                                                                      ('Dragon', 'A large, winged reptile with magical powers', 'dragon.jpg', 2, 3),
                                                                      ('Mermaid', 'A mythical creature with the upper body of a human and the tail of a fish', 'mermaid.jpg', 3, 2),
                                                                      ('Centaur', 'A mythical creature with the upper body of a human and the lower body of a horse', 'centaur.jpg', 1, 4),
                                                                      ('Griffin', 'A mythical creature with the body of a lion and the head and wings of an eagle', 'griffin.jpg', 2, 1),
                                                                      ('Pegasus', 'A mythical horse with wings', 'pegasus.jpg', 1, 4);

INSERT INTO user_creatures (user_id, creature_id) VALUES
                                                      (1, 1),
                                                      (1, 2),
                                                      (2, 3),
                                                      (3, 4);



