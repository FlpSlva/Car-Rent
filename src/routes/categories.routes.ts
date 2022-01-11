import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../entities/cars/useCases/createCategory';
import { listCategoryController } from '../entities/cars/useCases/listCategories';
import { importCategoryController } from '../entities/cars/useCases/importCategory';

const categoriesRoutes = Router();
const upload = multer({
    dest: './tmp',
})


categoriesRoutes.post("/", (req, res) => {
    return createCategoryController.handle(req, res);  
});

categoriesRoutes.get("/", (req, res) => {
   return listCategoryController.handle(req, res);
});

categoriesRoutes.post("/import", upload.single("file"), (req, res) => {

    return importCategoryController.handle(req, res); 
})

export { categoriesRoutes };