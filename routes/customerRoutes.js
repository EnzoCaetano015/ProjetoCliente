// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../Controllers/customerController');

router.get('/', customerController.list);
router.get('/create', customerController.createForm);
router.post('/create', customerController.create);
router.get('/:id', customerController.view);
router.get('/:id/edit', customerController.editForm);
router.post('/:id/edit', customerController.update);
router.post('/:id/delete', customerController.delete);

module.exports = router;
