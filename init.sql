CREATE TABLE interior(
id serial PRIMARY KEY,
	name text UNIQUE NOT NULL,
	category varchar(50) NOT NULL,
	price INTEGER NOT NULL
);

INSERT INTO interior (name, category, price)
	VALUES ('Urban', 'Chairs', 2300);
INSERT INTO interior (name, category, price)
	VALUES ('Leif', 'Sofa', 29300);
INSERT INTO interior (name, category, price)
	VALUES ('Joline', 'Table', 32600);
INSERT INTO interior (name, category, price)
	VALUES ('Albert', 'Chairs', 7600);
INSERT INTO interior (name, category, price)
	VALUES ('Stefan', 'Table', 67000);
INSERT INTO interior (name, category, price)
	VALUES ('Maud', 'Table', 44900);

SELECT * FROM interior;

CREATE TABLE images(
	imageId serial PRIMARY KEY,
	name text UNIQUE NOT NULL,
	image text UNIQUE NOT NULL
);

INSERT INTO images (name, image)
	VALUES ('Home page image', 'https://b.stablecog.com/a715ede9-84dc-4cf5-a1e2-223586ae486f.jpeg');

SELECT * FROM images;
