exports.up = async function (knex) {
  // translates to "CREATE TABLE 'fruits'"
  await knex.schema.createTable("fruits", (table) => {
    // tanslates to '"id" INTERGER NOT NULL UNIQUE PRIMARY KEY'
    // tamle.integer("id").notNull().unique().primary()
    table.increments("id");
    table.text("name").notNull().unique();
    table.float("avgWeightOz").notNull();
    table.boolean("delicious").defaultTo(true);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("fruits");
};
