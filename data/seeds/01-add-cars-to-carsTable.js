exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          make: "Porsche",
          model: "911 Turbo S",
          vin: "WP0ZZZ95ZJN100108",
          mileage: 0000,
          transmissionType: "Automatic",
          status: "Brand New"
        },
        {
          make: "Ferrari",
          model: "Roma",
          vin: "2CTALMECXB6324108",
          mileage: 8000,
          transmissionType: "Manual",
          status: "Nearly New"
        },
        {
          make: "Lamborghini",
          model: "Urus",
          vin: "1GNEK13ZX3R298984",
          mileage: 9999,
          transmissionType: "Manual",
          status: "Nearly new, minor nick on driver rear side"
        }
      ]);
    });
};
