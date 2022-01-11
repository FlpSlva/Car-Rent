import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.Routes";

const router = Router();

router.get("/", (req, res) => {
    res.json({message: "paulista voce é um genio !"})
})

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);



export {router};