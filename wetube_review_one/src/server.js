import express from "express";

const PORT = 4000;
const app = express();

const handleHome = (req, res) => {
    console.log(req.route.path);
    res.send("This is Root Page!")
}
app.get("/", handleHome);
app.get("/page2", handleHome);

const handleListener = () => {
    console.log (`✅ The server listening on port 4000 http://localhost:${PORT} 🚀`)
}

app.listen(PORT, handleListener);