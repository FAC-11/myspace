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
('Sol', '0', 'description of Earth', '5000000', 'weather report', 1),
('Mercury', '0.61', 'description of Mercury', '272', 'weather report', 50),
('Venus', '0.28', 'description of Venus', '737', 'weather report', 40),
('Earth', '0', 'description of Earth', '288', 'weather report', 50),
('The Moon', '0.003', 'description of Earth', '185', 'weather report', 20),
('Mars', '0.52', 'description of Mars', '210', 'weather report', 4),
('Jupiter', '4.2', 'description of Jupiter', '165', 'weather report', 20),
('Io', '4.2', 'description of IO', '110', 'weather report', 9),
('Europa', '4.2', 'description of Europa', '102', 'weather report', 90),
('Ganymede', '4.2', 'description of Ganymede', '110', 'weather report', 80),
('Callisto', '4.2', 'description of Callisto', '134', 'weather report', 70),
('Saturn', '8.52', 'description of Saturn', '134', 'weather report', 60),
('Uranus', '18.21', 'description of Uranus', '76', 'weather report', 80),
('Neptune', '29.09', 'description of Neptune', '72', 'weather report', 10);


CREATE TABLE reviews (
id            SERIAL                          PRIMARY KEY,
planet_id     INTEGER REFERENCES planets(id)  ON UPDATE CASCADE,
username      VARCHAR(20),
content       TEXT                            NOT NULL,
likes         INTEGER                         DEFAULT 0,
dislikes      INTEGER                         DEFAULT 0
);

INSERT INTO reviews (planet_id, username, content, likes, dislikes) VALUES
(1, 'Buzz Aldrin', 'Flew too close', '6', '0'),
(5, 'Buzz Lightyear', 'THE MOON!', '2', '2'),
(4, 'Ziggy Stardust', 'Kinda crowded', '0', '0'),
(9, 'Zap Branagan', 'Wi-fi was atrocious', '5', '5'),
(6, 'HAL-5000', 'Matt Damon', '0', '1'),
(8, 'WALL-E', 'Discovered by Galileo', '3', '6');

COMMIT;
