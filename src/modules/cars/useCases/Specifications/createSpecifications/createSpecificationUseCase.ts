import {inject, injectable} from 'tsyringe'
import { AppError } from '../../../../../errors/App.Error';
import { ISpecificationsRepository } from "../../../repositories/ISpecificationsRepositorty";


interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {

    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepository) { }
   
        async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationsRepository.findByName(name);

        

        if (specificationAlreadyExists) {
            throw new AppError("specification already exists!")
        }

       

        await this.specificationsRepository.create({
            name,
            description
        });


    }

}

export { CreateSpecificationUseCase };
