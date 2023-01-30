import prisma from '../config/database';

import { TransactionsSchema } from 'protocols';

async function addTransaction(transaction: TransactionsSchema) {
  return prisma.transactions.create({
    data: {
      userId: transaction.userId,
      value: transaction.value,
      description: transaction.description,
      date: new Date(`${transaction.date}`),
      type: transaction.type,
      createdAt: new Date(`${transaction.createdAt}`),
      updatedAt: new Date(`${transaction.updatedAt}`),
    },
  });
}

export const addRepository = {
  addTransaction,
};
