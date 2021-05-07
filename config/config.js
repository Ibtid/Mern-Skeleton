const config = {
  port: process.env.PORT || 5000,
  jwtSecret: process.env.JWT_SECRET || 'YOUR_secret_key',
  mongoUri:
    'mongodb+srv://IBTID:IBTID31@cluster0.tjn7l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
};

module.exports = config;
