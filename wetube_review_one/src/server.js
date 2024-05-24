import express from "express";
import { logger } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";


// Server setting
const PORT = 4000;
const app = express();
    // PUG setting
    app.set("view engine", "pug");
    app.set("views", process.cwd() + "/src/views");

// Middleware
app.use(logger);


// Router
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);


// ✅ Open Server 🚀
const handleListener = () => {
    console.log (`✅ The server listening on port 4000 http://localhost:${PORT} 🚀`)
}
app.listen(PORT, handleListener);