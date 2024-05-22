import express from "express";

const PORT = 4000;
const app = express();

const handleListener = () => {
    console.log (`✅ The server listening on port 4000 http://localhost:${PORT} 🚀`)
}

app.listen(PORT, handleListener);