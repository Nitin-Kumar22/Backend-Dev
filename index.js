import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import MongoStore from "connect-mongo";
import helmet from "helmet";
import cors from "cors";

import connectDB from "./connect-hub/config/db.js";
import authRoutes from "./connect-hub/routes/auth.routes.js";
import postRoutes from "./connect-hub/routes/post.routes.js";
import messageRoutes from "./connect-hub/routes/message.routes.js";
import profileRoutes from "./connect-hub/routes/profile.routes.js";
import { sanitizeData } from "./connect-hub/middleware/sanitize.middleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(helmet());

app.use(cors({
    origin: true,
    credentials: true
}));

app.use(express.json());
app.use(sanitizeData);

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    cookie: { maxAge: 30 * 60 * 1000 }
}));

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/profile", profileRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});