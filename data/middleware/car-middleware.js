const cars = require("../helpers/car-models");

function validateId(req, res, next) {
    cars
      .getCarById(req.params.id)
      .then(data => {
        if (data === undefined) {
          res.status(404).json(`ID is invalid`);
        } else {
          next();
        }
      })
      .catch(error => {
        res.status(400).json(`Error validating ID`);
      });
  }
  
  function validateUniqueVIN(req, res, next) {
    cars
      .getUniqueCarVINs()
      .then(data => {
        if (data.includes(req.body.vin)) {
          res.status(400).json("Please provide your cars unique VIN code");
        } else {
          next();
        }
      })
      .catch(error => {
        res.status(500).json("Error validating unique vin entry");
      });
  }
  
  function validateBodyFull(req, res, next) {
    if (
      !req.body.make ||
      !req.body.model ||
      !req.body.vin ||
      !req.body.mileage ||
      !req.body.transmissionType ||
      !req.body.status
    ) {
      res
        .status(400)
        .json(
          "Please give your car entry the following entries: make, model, mileage, transmissionType, status"
        );
    } else {
      next();
    }
  }

module.exports = { validateId, validateBodyFull, validateUniqueVIN };