const express = require("express");
const router = express.Router();
const cars = require("../helpers/car-models");
const {} = require("../middleware/car-middleware");

router.get("/api/cars", (req, res) => {
        cars
          .getAllCars()
          .then(cars => {
            res.status(200).json(cars);
          })
          .catch(error => {
            res.status(500).json('Error collecting cars data');
          });
});

router.get("/api/cars/:id", (req, res) => {
    cars
    .getCarById(req.params.id)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json(`Error collecting car data by id`);
    });
});

router.post("/api/cars", (req, res) => {
    cars
    .addNewCar(req.body)
    .then(car => {
      res.status(202).json(car);
    })
    .catch(error => {
      res.status(500).json(`Error adding new car data`);
    });
}
);

router.put("/api/cars/:id", (req, res) => {
    cars
    .updateCarById(req.params.id, req.body)
    .then(updated => {
      if (updated === 1) {
        res.status(200).json(`Car data has been updated`);
      } else {
        res.status(404).json(`Car data not update`);
      }
    })
    .catch(error => {
      res.status(500).json(`Error updating car data`);
    });  
}
);

router.delete("/api/cars/:id", (req, res) => {
    cars
    .deleteCarById(req.params.id)
    .then(deleted => {
      res.status(200).json(`Car data has been deleted`);
    })
    .catch(error => {
      res.status(500).json(`Error deleting car data`);
    });
});

module.exports = router;