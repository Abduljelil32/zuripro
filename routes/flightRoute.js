const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.post('/', controller.postflight);
router.get('/get-all-flight', controller.getFlight);
router.delete('/delete-flight', controller.deleteflight);
router.put('/update-flight/:title', controller.updteflight);
router.get('/get-single-flight/:title', controller.singleflight);





module.exports = router;

