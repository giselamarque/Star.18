const router = require('express').Router();
const userRoutes = require('./user-routes');    // <--- import user-routes.js
const thoRoutes = require('./tho-routes');      // <--- import tho-routes.js

router.use('/users', userRoutes);               // <--- add prefix of `/users` to routes created in user-routes.js
router.use('/thoughts', thoRoutes);             // <--- add prefix of `/thoughts` to routes created in tho-routes.js

module.exports = router;