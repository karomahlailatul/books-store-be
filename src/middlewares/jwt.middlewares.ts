import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
dotenv.config();

const secretKey = process.env.SECRET_KEY_JWT || "secretBookApp";
import responseHelper from "@/utils/response.utils";

export interface CustomRequest extends Request {
  userId?: number;
  role?: string;
}

export async function jwtValidator(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"];
  if (!token) {
    return responseHelper(res, null, 401, "Token Failed");
  }
  const tokenValue = token.split(" ")[1];
  jwt.verify(tokenValue, secretKey, (err, decoded) => {
    if (err) {
      return responseHelper(res, null, 401, "Token Failed");
    }
    req.userId = (decoded as { userId: number }).userId;
    next();
  });
}

export async function jwtAdminValidator(
  req: CustomRequest,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"];
  if (!token) {
    return responseHelper(res, null, 401, "Token Failed");
  }
  const tokenValue = token.split(" ")[1];
  jwt.verify(tokenValue, secretKey, (err, decoded) => {
    if (err) {
      return responseHelper(res, null, 401, "Token Failed");
    }
    req.userId = (decoded as { userId: number }).userId;
    req.role = (decoded as { role: string }).role;
    if (req.role !== "ADMIN") {
      return responseHelper(res, null, 403, "Token Not Accessable");
    }
    next();
  });
}
