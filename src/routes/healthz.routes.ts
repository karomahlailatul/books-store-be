import { Request, Response, Router } from "express";

const router = Router().get("/", (_req: Request, res: Response) => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };

  res.status(200).send(data);
});

export default router;
