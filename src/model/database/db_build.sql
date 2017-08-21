BEGIN;

DROP TABLE IF EXISTS planets, reviews CASCADE;


CREATE TABLE planets (
id            SERIAL        PRIMARY KEY,
name          VARCHAR(20)   NOT NULL,
distance      FLOAT(3)      NOT NULL,
description   TEXT          NOT NULL,
temperature   INTEGER       NOT NULL,
weather       VARCHAR(200)  NOT NULL,
interest      INTEGER       DEFAULT 0,
filename      varchar(40)   NOT NULL,
thumbnailname varchar(40)   NOT NULL
);


INSERT INTO planets (name, distance, description, temperature, weather, interest, filename, thumbnailname) VALUES
('Sol', '1', 'description of Earth', '5000000', 'weather report', 1, '/images/planets/sol.gif', '/images/planets/..pic'),
('Mercury', '0.61', 'description of Mercury', '272', 'weather report', 50, '/images/planets/mercury2.gif', '../pics/'),
('Venus', '0.28', 'description of Venus', '737', 'weather report', 40, '/images/planets/venus2.jpg', '../pics/'),
('Earth', '0', 'description of Earth', '288', 'weather report', 50, '/images/planets/earth.gif', '../pics/'),
('The Moon', '0.003', 'description of Earth', '185', 'weather report', 20, '../pics/', '../pics/'),
('Mars', '0.52', 'description of Mars', '210', 'weather report', 4, '/images/planets/mars.gif', '../pics/'),
('Jupiter', '4.2', 'description of Jupiter', '165', 'weather report', 20, '/images/planets/jupiter.gif', '../pics/'),
('Io', '4.2', 'description of IO', '110', 'weather report', 9, '../pics/', '../pics/'),
('Europa', '4.2', 'description of Europa', '102', 'weather report', 90, '/images/planets/europa.jpg', '../pics/'),
('Ganymede', '4.2', 'description of Ganymede', '110', 'weather report', 80, '/images/planets/ganymede.jpg', '../pics/'),
('Callisto', '4.2', 'description of Callisto', '134', 'weather report', 70, '/images/planets/callisto.jpg', '../pics/'),
('Saturn', '8.52', 'description of Saturn', '134', 'weather report', 60, '/images/planets/saturn.gif', '../pics/'),
('Uranus', '18.21', 'description of Uranus', '76', 'weather report', 80, '/images/planets/uranus.gif', '../pics/'),
('Neptune', '29.09', 'description of Neptune', '72', 'weather report', 10, '/images/planets/neptune.gif', '../pics/');


CREATE TABLE reviews (
id            SERIAL                          PRIMARY KEY,
planet_id     INTEGER REFERENCES planets(id)  ON UPDATE CASCADE,
username      VARCHAR(20),
content       TEXT                            NOT NULL,
likes         INTEGER                         DEFAULT 0,
dislikes      INTEGER                         DEFAULT 0
);

INSERT INTO reviews (planet_id, username, content, likes, dislikes) VALUES
(1, 'Buzz Aldrin', 'Bit hot', '6', '0'),
(1, 'Helga Pataki', 'Had a blast', '2', '7'),
(5, 'Buzz Lightyear', 'Not much atmosphere', '2', '2'),
(4, 'Ziggy Stardust', 'Kinda crowded', '0', '0'),
(9, 'Zap Branagan', 'Wi-fi was atrocious', '5', '5'),
(3, 'HAL-5000', 'Did NOT get on with the women here', '0', '1'),
(8, 'WALL-E', 'Discovered by Galileo', '3', '6'),
(12, 'Tim Peake', 'Journey took forever', '7', '8');

COMMIT;
