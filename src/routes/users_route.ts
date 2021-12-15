import { Router, Request, Response, NextFunction } from "express";
import DatabaseError from "../models/errors/database_error_model";
import user_repository from "../repositories/user_repository";

const userRoutes = Router();

userRoutes.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const users = await user_repository.findAllUsers();
    res.status(200).send(users);
});

userRoutes.get('/users/:uuid', async (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    try {
        const uuid = req.params.uuid;
        const user = await user_repository.findById(uuid);
        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
});

userRoutes.post('/users', async (req: Request, res: Response, next: NextFunction) => {
    const newUser = req.body;
    const uuid = await user_repository.createUser(newUser);
    res.status(201).send(newUser);
});

userRoutes.put('/users/:uuid', async (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await user_repository.updateUser(modifiedUser);

    res.status(200).send(modifiedUser);
});

userRoutes.delete('/users/uuid', async (req: Request<{ uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await user_repository.remove(uuid);
    res.sendStatus(200);

});

export default userRoutes; 