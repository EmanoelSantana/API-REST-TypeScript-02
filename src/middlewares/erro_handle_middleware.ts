import { Request, Response, NextFunction } from "express";
import DatabaseError from "../models/errors/database_error_model";



function errorHandle(error: any, req: Request, res: Response, next: NextFunction) {
    if ( error instanceof DatabaseError){
        res.sendStatus(400);
    } else {
        res.sendStatus(500);
    }
}

export default errorHandle;