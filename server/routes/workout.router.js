const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Get /workout", req);
  const sqlText = `
    SELECT * FROM workout
    WHERE user_id = $1
    AND DATE = CURRENT_DATE
    ORDER BY id;
  `;

  pool
    .query(sqlText, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router GET error", error);
      res.sendStatus(500);
    });
});

router.get("/:id", (req, res) => {
  console.log("Get /workout/:id", req);
  const sqlText = `
    SELECT * FROM workout
    WHERE user_id = $1
    AND id = $2;
  `;

  pool
    .query(sqlText, [req.user.id, req.params.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router GET error", error);
      res.sendStatus(500);
    });
});

router.get("/categories", (req, res) => {
  const sqlText = `
  SELECT * FROM categories ORDER BY id;`;
  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("Error fetching categories", error);
      res.sendStatus(500);
    });
});

// POST a new workout
router.post("/", (req, res) => {
  console.log("Post /workout", req);
  const sqlText = `
    INSERT INTO workout
    (user_id, categories, exercise, reps, reps_total, weight)
    VALUES
    ($1, $2, $3, $4, $5, $6)
    RETURNING *;
  `;

  const { categories, exercise, reps, reps_total, weight } = req.body;

  pool
    .query(sqlText, [
      req.user.id,
      categories,
      exercise,
      reps,
      reps_total,
      weight,
    ])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router POST error", error);
      res.sendStatus(500);
    });
});

router.post("/:id/complete", (req, res) => {
  const workoutId = req.params.id;
  const userId = req.user.id;
  const { reps_total } = req.body;

  const sqlText1 = `
    UPDATE workout
    SET status = TRUE,
        reps = $1
    WHERE id = $2
    AND user_id = $3;
  `;

  const sqlText2 = `
    UPDATE users
    SET experience = experience + 1
    WHERE id = $1;
  `;

  (async () => {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");

      await client.query(sqlText1, [reps_total, workoutId, userId]);

      await client.query(sqlText2, [userId]);

      await client.query("COMMIT");
      res.sendStatus(201);
    } catch (err) {
      await client.query("ROLLBACK");
      console.error("Transaction Error:", err);
      res.sendStatus(500);
    } finally {
      client.release();
    }
  })();
});

// Update a workout
router.put("/:id", (req, res) => {
  console.log("Put /workout/:id", req);
  const sqlText = `
    UPDATE workout
    SET 
    categories = $1,
    exercise = $2,
    reps = $3, 
    reps_total = $4,
    weight = $5
    WHERE id = $6
    AND user_id = $7;
  `;

  pool
    .query(sqlText, [
      req.body.categories,
      req.body.exercise,
      req.body.reps,
      req.body.reps_total,
      req.body.weight,
      req.params.id,
      req.user.id,
    ])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router PUT error", error);
      res.sendStatus(500);
    });
});

// Delete a workout
router.delete("/:id", (req, res) => {
  console.log("Delete /workout/:id", req);
  const sqlText = `
    DELETE FROM workout
    WHERE id = $1
    AND user_id = $2
    AND status = FALSE;
  `;

  pool
    .query(sqlText, [req.params.id, req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router DELETE error", error);
      res.sendStatus(500);
    });
});

module.exports = router;
