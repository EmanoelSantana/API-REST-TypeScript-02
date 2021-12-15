import { Router, Request, Response, NextFunction } from 'express';

const statusRoutes = Router();

statusRoutes.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200); 
});

export default statusRoutes;