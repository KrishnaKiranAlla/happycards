
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { catchErrors } = require('../errorhandlers');

router.post('/register',catchErrors(userController.register));
router.post('/signin',catchErrors(userController.signin));
router.get('/getuser',catchErrors(userController.getUser));

router.put('/getuser/:id',catchErrors(userController.updateUser));
router.delete('/getuser/:id',catchErrors(userController.deleteUser));
module.exports = router;


