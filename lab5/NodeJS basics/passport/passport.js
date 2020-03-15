// use the User model
// use 
const passport = require('passport');
const User = require('../models/User')

passport.use(User.createStrategy());

// this is required when you use sessions 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());