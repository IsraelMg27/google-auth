const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

console.log("CLIENT_ID from passport.js:", process.env.CLIENT_ID);
console.log("CLIENT_SECRET from passport.js:", process.env.CLIENT_SECRET);

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"],
        },
        function (accessToken, refreshToken, profile, callback) {
            callback(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
