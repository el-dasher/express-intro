import express from "express";

const app = express();
app.use(express.json());

app.get("/", () => {
  throw new Error("Erro!");
});

app.get("/async", async (_req, _res, next) => {
  try {
    throw new error("Erro assíncrono!");
  } catch(err) {
    next(err);
  }
});

app.use((err, _req, _res, next) => {
  next(err);
});

app.use((_err, _req, res, _next) => {
  res.status(500).send("ERRO INTERNO.");
});

app.listen(8080);
