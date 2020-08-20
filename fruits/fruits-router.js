const express = require("express")
const knex = require("knex")

const db = knex({
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./data/produce.db3",
	},
})

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await db("fruits"))
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const fruit = await db("fruits").where({ id }).first()
		
		res.json(fruit)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const [id] = await db("fruits").insert(req.body)
		const newFruit = await db("fruits").where({ id }).first()

		res.status(201).json(newFruit)
	} catch(err) {
		next(err)
	}
})

module.exports = router