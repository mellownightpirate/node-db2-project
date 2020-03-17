const db = require("../dbConfig");

function getAllCars() {
  return db("cars");
}

function getCarById(id) {
  return db("cars")
    .where({ id: id })
    .first();
}

function addNewCar({ make, model, vin, mileage, transmissionType, status }) {
  return db("cars").insert({
    make,
    model,
    vin,
    mileage,
    transmissionType,
    status
  });
}

function updateCarById(
  id,
  { make, model, vin, mileage, transmissionType, status }
) {
  return db("cars")
    .where({ id: id })
    .update({ make, model, vin, mileage, transmissionType, status });
}

function deleteCarById(id) {
    return db("cars")
      .where({ id: id })
      .delete();
  }

  function getUniqueCarVINs() {
    return db("cars")
      .distinct("vin")
      .pluck("vin");
  }

module.exports = { getAllCars, getCarById, addNewCar, updateCarById, deleteCarById, getUniqueCarVINs };
