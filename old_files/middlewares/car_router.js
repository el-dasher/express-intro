import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("Carros!");
});

router.get("/prices", (_req, res) => {
  res.send("Preço dos carros.");
});

export default router;
