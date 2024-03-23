import { Router } from "express";

import booksRoutes from "./books.routes";
import healthzRoutes from "./healthz.routes";
import ordersRoutes from "./orders.routes";
import sellersRoutes from "./sellers.routes";
import usersRoutes from "./users.routes";

const api = Router()
  .use("/users", usersRoutes)
  .use("/books", booksRoutes)
  .use("/orders", ordersRoutes)
  .use("/sellers", sellersRoutes)
  .use("/healthz", healthzRoutes);

export default Router().use("/v1", api);
