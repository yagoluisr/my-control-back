import express from 'express';
import dotenv from 'dotenv';
// import userRouter from './router/userRoutes.js';
// import guessesRouter from './router/guessesRoutes.js';
// import matchsRouter from './router/matchsRoutes.js';

dotenv.config();
export const app = express();
app.use(express.json());

// app.use(userRouter);
// app.use(guessesRouter);
// app.use(matchsRouter);

app.get('/status', (req, res) => {
  res.status(200).send('ok');
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`listening on port ${process.env.PORT || 4000}`);
});


