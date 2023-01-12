const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error!</h1>');
}
);

module.exports = router;


// Path: controllers/tho-controller.js
const route = require('express').Router();
const thoController = require('../../controllers/tho-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(thoController.getAllTho)
    .post(thoController.createTho);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(thoController.getThoById)
    .put(thoController.updateTho)
    .delete(thoController.deleteTho);

// Set up POST at /api/thoughts/:userId
router
    .route('/:userId')
    .post(thoController.addTho);

// Set up DELETE at /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .delete(thoController.removeTho);

module.exports = router;
