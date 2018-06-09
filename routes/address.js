
const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');
const { catchErrors } = require('../errorhandlers');

router.post('/register',catchErrors(addressController.register));
router.get('/getaddress',catchErrors(addressController.getAddress));
router.put('/getaddress/:id',catchErrors(addressController.updateAddress));
router.delete('/getaddress/:id',catchErrors(addressController.deleteAddress));

module.exports = router;


