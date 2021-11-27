import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepositorty";


interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {

    constructor(private specificationsRepository: ISpecificationsRepository) { }
   
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
