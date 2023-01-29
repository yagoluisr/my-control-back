import prisma from '../src/config/database';

async function user() {
  await prisma.user.createMany({
    data: [
      {
        id: 1,
        name: 'test2',
        email: 'test2@test.com',
        password: 'test123321',
        updatedAt: new Date('2022-12-16T02:12:42.501Z'),
      },
    ],
  });
  console.log('user criados com sucesso');
}

async function types() {
  const hasTypes = await prisma.types.findFirst();

  if (!hasTypes) {
    await prisma.types.createMany({
      data: [
        {
          id: 1,
          name: 'CREDIT',
        },
        {
          id: 2,
          name: 'DEBIT',
        },
        {
          id: 3,
          name: 'INVESTMENT',
        },
      ],
    });
  }

  console.log('types criados com sucesso');
}

async function transactions() {
  await prisma.transactions.createMany({
    data: [
      {
        id: 1,
        userId: 1,
        value: 300000,
        description: 'Salário',
        date: new Date('2023-01-01'),
        type: 1,
        updatedAt: new Date('2023-01-28 23:58:46.957Z'),
      },
      {
        id: 2,
        userId: 1,
        value: 20000,
        description: 'Serviço Garçom',
        date: new Date('2023-01-05'),
        type: 1,
        updatedAt: new Date('2023-01-28 23:58:46.957Z'),
      },
      {
        id: 3,
        userId: 1,
        value: 15000,
        description: 'Gás',
        date: new Date('2023-01-15'),
        type: 2,
        updatedAt: new Date('2023-01-28 23:58:46.957Z'),
      },
      {
        id: 4,
        userId: 1,
        value: 50000,
        description: 'Investimento',
        date: new Date('2023-01-20'),
        type: 3,
        updatedAt: new Date('2023-01-28 23:58:46.957Z'),
      },
    ],
  });
  console.log('Transactions criados com sucesso');
}

user()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    //await prisma.$disconnect();
  });

types()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    //await prisma.$disconnect();
  });

transactions()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    //await prisma.$disconnect();
  });
