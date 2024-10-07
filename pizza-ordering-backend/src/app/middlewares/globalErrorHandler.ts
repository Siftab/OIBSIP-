import { ErrorRequestHandler } from "express";
import config from "../config";
import AppError from "../errors/AppError";

export type TErrorSources = {
    path: string | number;
    message: string;
  }[];

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    // console.log(err.statusCode);
    //setting default values
    let statusCode = 500;
    let message = 'Something went wrong!';
    let errorSources:TErrorSources = [
      {
        path: '',
        message: 'Something went wrong',
      },
    ];

    if (err instanceof AppError) {
      statusCode = err?.statusCode;
      message = err.message;
      errorSources = [
        {
          path: '',
          message: err?.message,
        },
      ];
    } else if (err instanceof Error) {
      message = err.message;
      errorSources = [
        {
          path: '',
          message: err?.message,
        },
      ];AppError
    }


     res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err,
        stack: config.NODE_ENV === 'development' ? err?.stack : null,
      });
      return
    };
    
    export default globalErrorHandler;