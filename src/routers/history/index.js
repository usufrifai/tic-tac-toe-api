import express from 'express';
import HistoryController from '../../controllers/history-controller'

const router = express.Router();

router.get('/history', HistoryController.getHistory);
router.post('/history', HistoryController.saveHistory);

export default router;
