import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { TransactionsSchema } from 'protocols';
import { addRepository } from '../repositories/addRepository';

export async function addTransaction(req: Request, res: Response) {
  const transaction = req.body as TransactionsSchema;

  try {
    const addedTransaction = await addRepository.addTransaction(transaction);
    
    return res.status(httpStatus.CREATED).send(addedTransaction);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }
}
