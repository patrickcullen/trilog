'use strict';

module.exports = {
    db: process.env.MONGOLAB_URI ||
      process.env.MONGOHQ_URL ||
      'mongodb://localhost/mydb',
    app: {
        name: 'trilog'
    },
    facebook: {
        clientID: '668421416532462',
        clientSecret: '24be4786477810342300af3c4fd2c38e',
        callbackURL: 'http://trilog.herokuapp.com/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: '0cb225c1506386e5c7fe',
        clientSecret: '219afdbde14ec1997621cdb5b508fe096c2050b1',
        callbackURL: 'http://trilog.herokuapp.com/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
