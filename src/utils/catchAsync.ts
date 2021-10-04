import { Request, Response, NextFunction } from "express";
export default const catchAsync = (fn: function) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};
