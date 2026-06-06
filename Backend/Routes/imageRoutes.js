const express=require("express");
const router=express.Router();

console.log("imageRoutes loaded");

const{saveImage,}=require("../Controllers/ImageController");

    router.get("/test", (req, res) => {
  res.send("Image Route Working");
});

router.post("/save",saveImage);

module.exports=router;