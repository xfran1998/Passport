import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import cors from "cors";
const app = express();

// set cookie session
app.use(
  cookieSession({
    name: "session",
    keys: ["test"],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.listen(5000, () => {
  console.log("Listening on port 3000");
});

// id cliente: 411659578513-v3c5pmvlo1dkc4c1po3eqdvi1jiv9r66.apps.googleusercontent.com
// secret cliente: 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