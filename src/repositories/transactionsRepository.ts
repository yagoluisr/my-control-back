import prisma from "../config/database";


async function findTransactions() {
    return prisma.transactions.findMany();
}

export const transactionsRepository = {
    findTransactions,
}