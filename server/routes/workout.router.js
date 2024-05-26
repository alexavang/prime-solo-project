const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  console.log("Get /workout", req);
  const sqlText = `
  SELECT * FROM workout
    WHERE user_id = ${req.user.id}
    DATE = CURRENT_DATE
    ORDER by id;
  `;

  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router GET error", error);
      res.sendStatus(500);
    });
});

/**
 * GET route template
 */
router.get("/:id", (req, res) => {
  // GET route code here
  console.log("Get /workout", req);
  const sqlText = `
  SELECT * FROM workout
    WHERE user_id = ${req.user.id}
    AND id = ${req.params.id}
  `;

  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router GET error", error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
  console.log("Post /workout", req);
  const sqlText = `
  INSERT INTO users
    ("user_id", "categories", "exercise", "reps_total", "weight")
    VALUES
    (${req.user.id}, ${req.body.categories}, ${req.body.exercise}, ${req.body.reps_total}, ${req.body.weight});
  `;

  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router POST error", error);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post("/:id/complete", (req, res) => {
  // POST route code here
  console.log("Post /workout", req);
  const sqlText = `
  UPDATE workout
    SET status = TRUE
    WHERE id = ${req.params.id};
  `;

  const sqlText2 = `
  UPDATE users
    SET experience = experience + 1
    WHERE id = ${req.user.id};
  `;

  pool
    .query(sqlText, sqlText2)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router POST error", error);
      res.sendStatus(500);
    });
});

/**
 * PUT route template
 */
router.put("/:id", (req, res) => {
  // PUT route code here
  console.log("Put /workout", req);
  const sqlText = `
  UPDATE workout
    SET reps = ${req.body.reps}, weight = ${req.body.weight} 
    WHERE id = ${req.params.id};
  `;

  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router PUT error", error);
      res.sendStatus(500);
    });
});

/**
 * DELETE route template
 */
router.delete("/:id", (req, res) => {
  // DELETE route code here
  console.log("Delete /workout", req);
  const sqlText = `
  DELETE FROM workout
    WHERE id = ${req.params.id}
    AND status = FALSE;
  `;

  pool
    .query(sqlText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("router DELETE error", error);
      res.sendStatus(500);
    });
});

module.exports = router;
