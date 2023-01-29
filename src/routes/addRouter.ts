import { addTransaction } from "../controllers";
import { Router } from "express";


const addRouter = Router();

addRouter
    .post('', addTransaction);


export { addRouter };
