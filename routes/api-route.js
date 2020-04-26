const Workout = require("../models/workoutModel.js");

module.exports = function (app) {

app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.status(400).json(err)
      });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
  console.log(body)
  Workout.findByIdAndUpdate(
          params.id, { $push: { exercises: body } },
          { new: true, runValidators: true }
      )
      .then(dbWorkout => {
          res.json(dbWorkout);
          console.log(dbWorkout)
      })
      .catch(err => {
          res.json(err);
      });
});

app.get("/api/workouts/range", function(req, res) {
  // console.log(res)
  Workout.find({}).then(dbWorkout => {
      res.json(dbWorkout)
      console.log(dbWorkout)
  }).catch(err => {
      res.json(err);
  });
});

}

