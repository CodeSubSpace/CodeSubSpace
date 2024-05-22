import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    console.log(req);
    res.send("This is Root Page!")
}
app.get("/", handleHome);

const handleListener = () => {
    console.log (`✅ The server listening on port 4000 http://localhost:${PORT} 🚀`)
}

app.listen(PORT, handleListener);