import express from "express";
import { logger } from "./middlewares";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    res.send("This is Root Page!")
}

app.use(logger);
app.get("/", handleHome)

const handleListener = () => {
    console.log (`✅ The server listening on port 4000 http://localhost:${PORT} 🚀`)
}

app.listen(PORT, handleListener);