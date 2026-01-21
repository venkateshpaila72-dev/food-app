import express from "express";
import { addFood,Listfood,removeFood} from "../controllers/foodController.js";
import multer from "multer";


const foodRouter=express.Router();

//image stroage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload=multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",Listfood);
foodRouter.delete("/delete",removeFood);













export default foodRouter;