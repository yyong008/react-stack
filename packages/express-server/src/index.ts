import path from "path";
import express from "express";

const app = express();

app.use(
  "/static",
  express.static(path.join(__dirname, "../static"), {
    index: false,
  })
);

app.use(express.urlencoded({ extended: false }));

app.use("/", (_, res) => {
  res.send({ code: 1, data: { app: "express server " } });
});

app.use("/api", (_, res) => {
  res.send({ code: 1, data: { name: 1 } });
});

app.listen(9898, () => {
  console.info(`===> api server is running at http://localhost:9898`);
});
