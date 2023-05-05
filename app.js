const express = require("express");
const checklistRouter = require("./src/routers/checklis");
const loginRouter = require("./src/routers/login");

const app = express();

app.use(express.json());

app.use("/checklists", checklistRouter);
app.use("/login", loginRouter);

app.listen(3000, () => {
  console.log("Servidor Rodando na Porta 3000!");
});
