
import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {


    constructor(private categorieRepository: ICategoryRepository) {}


    

    async execute({name, description}: IRequest): Promise<void> {
        const categoryAreadyExists = await this.categorieRepository.findByName(name);

        if(categoryAreadyExists){
            throw new Error("Category Already Exists ")
        }
    
        this.categorieRepository.create({name, description});
    }

}

export { CreateCategoryUseCase };