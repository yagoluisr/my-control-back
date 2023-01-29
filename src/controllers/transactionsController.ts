import { Request, Response } from "express";
import httpStatus from "http-status";
import { transactionsRepository } from "../repositories/transactionsRepository";


export async function listTransactions(req: Request, res: Response) {
    
    try {
        const transactions = await transactionsRepository.findTransactions();
        
        return res.status(httpStatus.OK).send(transactions);
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}
