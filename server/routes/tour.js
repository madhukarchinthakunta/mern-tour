import express from "express";
import { createTour, getTours }  from "../controllers/tour.js"

const router = express.Router() 
router.post("/r",createTour)
router.get("/",getTours)

export default router;