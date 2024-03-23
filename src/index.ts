import cors from "cors";
import { config } from "dotenv";
import express, { Request, Response } from "express";
import helmet from "helmet";

import routes from "@/routes";

config();

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());
app.disable("x-powered-by");

app.use(routes);
app.all("*", (_: Request, res: Response) => {
  return res.status(500).send({
    message: "Internal server error",
    status: 500,
  });
});

const PORT = Number(process.env.APP_PORT) || 8000;
app.listen(PORT, () => {
  console.info(`Server Running On ${PORT}`);
});
