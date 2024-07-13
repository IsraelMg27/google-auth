require("dotenv").config();
console.log("CLIENT_ID from server.js:", process.env.CLIENT_ID);
console.log("CLIENT_SECRET from server.js:", process.env.CLIENT_SECRET);

const express = require("express");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
require("./passport");

const app = express();

app.use(
    cookieSession({
        name: "session",
        keys: ["cyberwolve"],
        maxAge: 24 * 60 * 60 * 100,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);

app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
