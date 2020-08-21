const express = require("express");
const knex = require("knex");
const db = require("../data/config");

const router = express.Router();

router.get("/fruits", async (req, res, next) => {
  try {
    res.json(await db("fruits"));
  } catch (err) {
    next(err);
  }
});

router.get("/fruits/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const fruit = await db("fruits").where({ id }).first();

    res.json(fruit);
  } catch (err) {
    next(err);
  }
});

router.post("/fruits", async (req, res, next) => {
  try {
    const [id] = await db("fruits").insert(req.body);
    const newFruit = await db("fruits").where({ id }).first();

    res.status(201).json(newFruit);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
