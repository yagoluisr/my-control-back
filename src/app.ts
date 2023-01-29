import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { transactionsRouter } from './routes/transactionsRouter';
import { addRouter } from './routes/addRouter';



dotenv.config();
const app = express();
app.use(express.json());

app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use('/transactions', transactionsRouter)
  .use('/add', addRouter);


app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on port ${process.env.PORT || 4000}`);
});

export default app;
