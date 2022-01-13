import {inject, injectable} from 'tsyringe'
import { ICategoryRepository } from "../../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}


@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categorieRepository: ICategoryRepository
        ) {}


    

    async execute({name, description}: IRequest): Promise<void> {
        
        const categoryAreadyExists = await this.categorieRepository.findByName(name);

        if(categoryAreadyExists){
            throw new Error("Category Already Exists ")
        }
    
        this.categorieRepository.create({name, description});
    }

}

export { CreateCategoryUseCase };