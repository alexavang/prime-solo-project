-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "experience" INTEGER DEFAULT 0,
    "profileImage" VARCHAR (255)
);

CREATE TABLE "workout" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT,
	"date" DATE NOT NULL DEFAULT CURRENT_DATE,
	"categories" VARCHAR(255),
	"exercise" VARCHAR (255),
	"reps" INTEGER,
	"reps_total" INTEGER,
	"weight" INTEGER,
	"status" BOOLEAN DEFAULT FALSE,
	CONSTRAINT fk_user
      FOREIGN KEY(user_id) 
	  REFERENCES users(id)
	  ON DELETE SET NULL
);

--INSERT INTO "users"
--	("profileImage")
--	VALUES
--('img/pan.png'),
--('img/workinout.png'),
--('img/slay.png'),
--('img/canicomeoverandstareatyoulikethis.png'),
--('img/pain.png'),
--('img/sadness.png'),
--('img/aaaastress.png'),
--('img/angy.png'),
--('img/fist.png'),
--('img/flowerforyou.png'),
--('img/kirb.png'),
--('img/opertato.png'),
--('img/thonking.png'),
--('img/delicious.png'),
--('img/hehe.png'),
--('img/morty.png'),
--('img/ohmygaahh.png'),
--('img/doggo.png'),
--('img/hepme.png'),
--('img/xcuseme.png'),
--('img/nothoughts.png'),
--('img/duck.png'),
--('img/L.png'),
--('img/nice.png'),
--('img/sadoge.png'),
--('img/willnt.png'),
--('img/racc.png');

INSERT INTO "workout"
	("user_id", "categories", "exercise", "reps", "reps_total", "weight", "status")
	VALUES
('1', 'Upper Body', 'Desk pushups', 10, 30, 0, FALSE),
('1', 'Lower Body', 'Donkey Kick', 0, 20, 0, FALSE),
('1', 'Upper Body', 'Push Ups', 75, 100, 0, FALSE),
('1', 'Back and Core', 'Sit Ups', 75, 75, 0, TRUE);

DROP TABLE "users";

DROP TABLE "workout";

SELECT * FROM workout
    WHERE user_id = 1 
    AND DATE = CURRENT_DATE
    ORDER by id;
    
SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'users';

ALTER TABLE users ADD COLUMN level INTEGER DEFAULT 1;
ALTER TABLE users ADD COLUMN current_experience INTEGER DEFAULT 0;
ALTER TABLE users ADD COLUMN experience_required INTEGER DEFAULT 10;




