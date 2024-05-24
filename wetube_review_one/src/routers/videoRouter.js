import express from "express";
import { see, seeParams } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/", see);
videoRouter.get("/:id/edit", seeParams);

export default videoRouter