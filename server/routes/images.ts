import express from "express";
import { getAllImages, uploadImage, deleteImage } from "../controllers/imageController";

const router = express.Router();

router.get("/getAllImages", getAllImages);
router.post("/addImage", uploadImage);
router.post("/deleteImage", deleteImage);

export default router;
