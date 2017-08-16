BEGIN;

DROP TABLE IF EXISTS planets, reviews CASCADE;


CREATE TABLE planets (
id            SERIAL        PRIMARY KEY,
name          VARCHAR(20)   NOT NULL,
distance      FLOAT(3)      NOT NULL,
description   TEXT          NOT NULL,
temperature   INTEGER       NOT NULL,
weather       VARCHAR(200)  NOT NULL,
interest      INTEGER       DEFAULT 0
);


INSERT INTO planets (name, distance, description, temperature, weather, interest) VALUES
('Sol', '0', 'description of Earth', '5000000', 'weather report'),
('Mercury', '0.61', 'description of Mercury', '272', 'weather report'),
('Venus', '0.28', 'description of Venus', '737', 'weather report'),
('Earth', '0', 'description of Earth', '288', 'weather report'),
('The Moon', '0.003', 'description of Earth', '185', 'weather report'),
('Mars', '0.52', 'description of Mars', '210', 'weather report'),
('Jupiter', '4.2', 'description of Jupiter', '165', 'weather report'),
('Io', '4.2', 'description of IO', '110', 'weather report'),
('Europa', '4.2', 'description of Europa', '102', 'weather report'),
('Ganymede', '4.2', 'description of Ganymede', '110', 'weather report'),
('Callisto', '4.2', 'description of Callisto', '134', 'weather report'),
('Saturn', '8.52', 'description of Saturn', '134', 'weather report'),
('Uranus', '18.21', 'description of Uranus', '76', 'weather report'),
('Neptune', '29.09', 'description of Neptune', '72', 'weather report');


CREATE TABLE reviews (
id            SERIAL                          PRIMARY KEY,
planet_id     INTEGER REFERENCES planets(id)  ON UPDATE CASCADE,
user          VARCHAR(20),
content       TEXT                            NOT NULL,
likes         INTEGER                         DEFAULT 0,
dislikes      INTEGER                         DEFAULT 0
);

INSERT INTO reviews (planet_id, user, content, likes, dislikes) VALUES
(1, 'Buzz Aldrin', 'Sun funny', '6', '0'),
(5, 'Buzz Lightyear', 'THE MOON!', '2', '2'),
(4, 'Ziggy Stardust', 'Kinda crowded'),
(9, 'Zap Branagan', 'Wi-fi was atrocious', '', '5'),
(6, 'HAL-5000', 'Matt Damon', '0', '1'),
(8, 'WALL-E', 'Discovered by Galileo', '0', '0');
COMMIT;
