module.exports = {
    // mongoUri: 'mongodb://localhost/myFirstNode',
    // or use 
    mongoUri: 'mongodb://admin:password@localhost:27017/students',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '590229895588-ehlq078dglemtchrjuo967s0o1q9im60.apps.googleusercontent.com',
        clientSecret: 'gXoeeebZVsiuQZcpaPvdqO73',
        callbackURL: 'http://localhost:3001/oauth/google/callback'
 }
}
