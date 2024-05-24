export const see = (req, res) => {
    res.send("see");
}

export const seeParams = (req, res) => {
    const params = req.params;
    console.log(params);
    res.send("see console")
}