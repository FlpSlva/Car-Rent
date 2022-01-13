import {inject, injectable} from 'tsyringe'
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
   
        execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("specification already exists!")
        }

        this.specificationsRepository.create({
            name,
            description
        });


    }

}

export { CreateSpecificationUseCase };
