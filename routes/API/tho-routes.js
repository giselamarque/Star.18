const router = require('express').Router();
const { getAllTho, getThoById, createTho, updateTho, deleteTho, addTho, removeTho } = require('../../controllers/tho-controller');

require('../../controllers/tho-controller');

// Set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllTho)
    .post(createTho);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoById)
    .put(updateTho)
    .delete(deleteTho);

// Set up POST at /api/thoughts/:userId
router
    .route('/:userId')
    .post(addTho);

// Set up DELETE at /api/thoughts/:userId/:thoughtId
router
    .route('/:userId/:thoughtId')
    .delete(removeTho);

module.exports = router;