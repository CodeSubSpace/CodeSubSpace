import express from "express";
import { edit, see, seeParams } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/", see);
videoRouter.get("/:id(\\d+)", seeParams);
videoRouter.get("/edit", edit)

export default videoRouter