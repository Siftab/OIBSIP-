import express from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import router from "./app/routes";
const app = express();
const port = 3000;

app.use("/api/pizza/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(globalErrorHandler);
// handle invalid Api
app.use("*", (req, res) => {
  res.send({ success: false, message: "Api not Found", data: "" });
});
export default app;
