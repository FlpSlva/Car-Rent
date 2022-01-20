import { Router } from "express";
import { categoriesRoutes } from "./cars/categories.routes";
import { specificationsRoutes } from "./cars/specifications.Routes";
import { usersRoutes } from "./accounts/users.routes";

const router = Router();

router.get("/", (req, res) => {
    res.json({message: "paulista voce é um genio !"})
})

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRoutes);
router.use("/users", usersRoutes);


export {router};