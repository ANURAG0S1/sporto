// const express = require('express');
// const router = express.Router();
// const adminMiddleware = require('../middlewares/adminMiddleware');

// // Protected route for admin only
// router.get('/admin/dashboard', adminMiddleware, (req, res) => {
//   // Handle the request for admin dashboard
//   res.json({ message: 'Welcome, admin!' });
// });

// module.exports = router;



const adminMiddleware = (req, res, next) => {
    const { username } = req.user; // Assuming you have the user object available in the request
  
    if (username !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }
  
    next();
  };
  
  module.exports = adminMiddleware;