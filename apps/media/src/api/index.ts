import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import express from 'express';
import proxy from './proxy';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/proxy', proxy);

export default router;
