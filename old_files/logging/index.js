import express from "express";
import winston from "winston";

app = express();
app.use(express.json());

const { combine, printf, label } = winston.format;

const logFormat = printf(({ level, message, label, timestamp }) => {
  return `${level} [${timestamp}] - ${message} - [${label}]`;
});

winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "./logs/silly.log" }),
  ],
  format: combine(label({ label: "example-label" }), timestamp(), logFormat),
});

app.listen(8080);
