const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storecontroller');

router.post('/user', storeController.store);


router.post('/info_form', storeController.store_info_form);
module.exports = router;