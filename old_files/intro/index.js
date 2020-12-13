import express from "express";

const app = express();
app.use(express.json());

app.all("/all", (req, res) => {
  res.send(`O método utilizado foi ${req.method}`);
});

app.get("/and?", (_, res) => {
  res.send("YEH");
});

app.get("/what+", (req, res) => {
  res.send(req.url);
});

app.get("/one*two", (req, res) => {
  res.send(req.url);
});

app.all("/all_2(heh)?", (req, res) => {
  res.send(req.url);
});

app.post("/post", (req, res) => {
  res.send(req.body);
});

// Path params
app.get("/param/:id", (req, res) => {
  res.send(req.params.id);
});

// Inparams
app.get(/.*inparam$/, (_, res) => {
  res.send("INPARAM");
});

// Query Params
app.get("/query", (req, res) => {
  if (req.query.lorem !== undefined) {
    res.send("Tem lorem");
  } else {
    res.send("Parâmetro lorem obrigatório!");
  }
});

// Next
app.get(
  "/next",
  (_req, _res, next) => {
    console.log("Hello, world 1");
    next();
  },
  (_req, _res, next) => {
    console.log("Hello, world 2");
    next();
  },
  (_req, res) => {
    res.send("Hello, world 3");
    // res.end();
  }
);

// next com array

function Callback1(_req, _res, next) {
  console.log("Hello");
  next();
}

function Callback2(_req, res) {
  console.log("world!");
  res.send("Hello, world!");
}

app.get("/next/1", [Callback1, Callback2]);

// route
app.route("/route").get((req, res) => res.send(req.method)).post((req, res) => res.send(req.method));

app.listen(8080);
