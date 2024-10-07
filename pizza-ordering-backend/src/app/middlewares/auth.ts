import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import catchAsync from "../Utils/catchAsync";
import { JwtPayload } from "jsonwebtoken";
import config from "../config";
import jwt from 'jsonwebtoken'
import { User } from "../modules/Users/user.model";

const auth = (...requiredRoles:['admin','user']) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
      const token = req.headers.authorization;
  
      // checking if the token is missing
      if (!token) {
        throw new AppError(httpStatus.UNAUTHORIZED, 'You are not authorized!');
      }
  
      // checking if the given token is valid
      const decoded = jwt.verify(
        token,
        config.accessToken as string,
      ) as JwtPayload;
  
      const { role, userId, iat } = decoded;
  
      // checking if the user is exist
      const user = await User.find(userId)
      if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
      }
      // checking if the user is already deleted
  
     
  
      if (requiredRoles && !requiredRoles.includes(role)) {
        throw new AppError(
          httpStatus.UNAUTHORIZED,
          'You are not authorized  hi!',
        );
      }
  
      req.user = decoded as JwtPayload & { role: string };
      next();
    });
  };
  
  export default auth;