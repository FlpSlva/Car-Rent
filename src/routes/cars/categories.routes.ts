import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../../modules/cars/useCases/Categories/createCategory/CreateCategoryController';
import { ListCategoryController } from '../../modules/cars/useCases/Categories/listCategories/ListCategoryController';
import { ImportCategoryController } from '../../modules/cars/useCases/Categories/importCategory/ImportCategoryController';

const categoriesRoutes = Router();
const upload = multer({
    dest: './tmp',
})

const createCategoryController = new CreateCategoryController()
const importCategoryController = new ImportCategoryController()
const listCategoryController = new ListCategoryController()


categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle)

export { categoriesRoutes };