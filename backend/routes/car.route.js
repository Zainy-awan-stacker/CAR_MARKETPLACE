import express from "express";
import {getCars,addCar,deleteCar,getSingleCar} from "../controller/car.controller.js";

const router = express.Router();

router.get("/",getCars);

router.post("/add",addCar);

router.get("/:id",getSingleCar);

router.delete("/:id",deleteCar);

export default router;