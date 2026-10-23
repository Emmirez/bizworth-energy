import { Router } from 'express';
import { submitReport, checkReport } from '../controllers/whistleblowController.js';

const router = Router();

router.post('/', submitReport);
router.post('/check', checkReport);

export default router;