import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { Request, Response, NextFunction, RequestHandler } from "express";

export const validateDto = (dtoClass: any): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const dtoObj = plainToInstance(dtoClass, req.body);
    const errors: ValidationError[] = await validate(dtoObj);
    if (errors.length > 0) {
      const msgs = errors.flatMap((err) => Object.values(err.constraints || {}));
      res.status(400).json({ errors: msgs });
      return;
    }
    next();
  };
};
