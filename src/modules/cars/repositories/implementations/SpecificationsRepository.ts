import { Specification } from "../../entities/Specifications/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepositorty";
import { getRepository, Repository } from "typeorm";




class SpecificationsRepository implements ISpecificationsRepository{

    private repository: Repository<Specification>

    constructor () {
        this.repository = getRepository(Specification)
    }
    
    async create({ description, name }: ICreateSpecificationDTO): Promise<void>{
        
        const specification = this.repository.create({
            description,
            name
        })

        await this.repository.save(specification);
        
    }
    
    
    async findByName(name: string): Promise<Specification> {

        const specification = await this.repository.findOne({
            name
        })

        return specification;
    }

    
    

}

export { SpecificationsRepository };