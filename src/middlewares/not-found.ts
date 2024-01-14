import { Request, Response } from "express";
import { NotFoundError } from "../errors";

const notFound = (req: Request, res: Response): void => {
  throw new NotFoundError("route not found");
};

export default notFound;
