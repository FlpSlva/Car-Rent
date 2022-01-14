import {Request, Response} from 'express'
import {container} from 'tsyringe'
import { CreateSpecificationUseCase } from './createSpecificationUseCase';


class CreateSpecificationController{

   

    handle(req: Request, res: Response): Response {

        const {name, description} = req.body;

        const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase)

        createSpecificationUseCase.execute({name, description});
        
        return res.status(201).json();

    }
}

export {CreateSpecificationController};