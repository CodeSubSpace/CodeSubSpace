import express from "express";
import { logger } from "./middlewares";
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";


// Server setting
const PORT = 4000;
const app = express();

// Middleware
app.use(logger);

// Router
app.use("/", globalRouter);
app.use("/video", videoRouter);


// ✅ Open Server 🚀
const handleListener = () => {
    console.log (`✅ The server listening on port 4000 http://localhost:${PORT} 🚀`)
}
app.listen(PORT, handleListener);