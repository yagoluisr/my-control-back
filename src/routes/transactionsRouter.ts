import { listTransactions } from "../controllers/transactionsController";
import { Router } from "express";


const transactionsRouter = Router();

transactionsRouter
    .get('', listTransactions);


export { transactionsRouter };