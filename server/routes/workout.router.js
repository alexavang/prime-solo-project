const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
  console.log("Get /character", req);
  const sqlText = `
  SELECT * FROM character
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
 * POST route template
 */
router.post("/", (req, res) => {
  // POST route code here
});

/**
 * PUT route template
 */
router.put("/", (req, res) => {
  // PUT route code here
});

/**
 * DELETE route template
 */
router.delete("/", (req, res) => {
  // DELETE route code here
});

module.exports = router;
