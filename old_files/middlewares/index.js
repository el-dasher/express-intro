import express from "express";
import carRouter from "../../middlewares/car_router.js";

const app = express();
app.use(express.json());

app.use("/cars", carRouter);
app.use((_req, _res, next) => {
  console.log(new Date());
  next();
});

app.get("/", (_req, res) => {
  res.end();
});

app.listen(8080)
