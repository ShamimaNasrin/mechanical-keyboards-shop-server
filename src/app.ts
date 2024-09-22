import express, { Application, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("keyclicks server running!!");
});

// handle invalid  routes
app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
