import path from "path";
import express from "express";
import cors from "cors";

const app = express();

app.use(
  "/static",
  express.static(path.join(__dirname, "../static"), {
    index: false,
  })
);

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  res.send({ code: 1, data: { app: "express server " } });
});

app.get("/api", (_, res) => {
  res.send({ code: 1, data: { name: 1 } });
});

app.get("/age", (_, res) => {
  setTimeout(() => {
    res.send({ code: 0, data: { age: 13 }, msg: "success" });
  }, 1000);
});

app.get("/thunk-userinfo", (_, res) => {
  setTimeout(() => {
    res.send({
      code: 0,
      data: { name: "redux", createdAt: new Date(), question: "What is thunk?", answer: "a function, return function with dispatch params and some effect..." },
      msg: "success",
    });
  }, 1000);
});

app.listen(9898, () => {
  console.info(`===> api server is running at http://localhost:9898`);
});
