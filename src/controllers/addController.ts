import { Request, Response } from "express";
import httpStatus from "http-status";


export async function addTransaction(req: Request, res: Response) {
    const { test } = req.body;
    console.log(test);
    try {
        //const transactions = await transactionsRepository.findTransactions();
        
        return res.status(httpStatus.OK).send('transactions');
    } catch (error) {
        return res.sendStatus(httpStatus.BAD_REQUEST);
    }
}
