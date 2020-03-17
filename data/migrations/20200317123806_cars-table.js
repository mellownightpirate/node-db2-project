exports.up = function(knex) {
  return knex.schema.createTable("cars", table => {
    table.increments();
    table.text("make").notNullable();
    table.text("model").notNullable();
    table
      .text("vin")
      .notNullable()
      .unique();
    table.integer("mileage").notNullable();
    table.enu("transmissionType", ["Manual", "Semi-Automatic", "Automatic"]);
    table.text("status");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
