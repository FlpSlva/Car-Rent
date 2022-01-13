import { Router } from "express";
import { CreateSpecificationController } from "../modules/cars/useCases/Specifications/createSpecifications/createSpecificationController";

const specificationsRoutes = Router();


const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post("/", createSpecificationController.handle);

export {specificationsRoutes}