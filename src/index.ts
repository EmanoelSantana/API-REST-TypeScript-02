import express, {Request, Response, NextFunction} from "express";
import userRoutes from "./routes/users_route";
import statusRoutes from "./routes/status_route";
import errorHandle from "./middlewares/erro_handle_middleware";

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(userRoutes);
app.use(statusRoutes);

app.use(errorHandle);

app.listen(3001, () => {
    console.log('Aplicação executando na porta 3001!');
});