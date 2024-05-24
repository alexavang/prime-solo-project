const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

/**
 * GET route template
 */
router.get("/", (req, res) => {
  // GET route code here
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
