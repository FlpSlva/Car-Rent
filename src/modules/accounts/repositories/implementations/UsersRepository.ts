import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

 
class UsersRepository implements IUsersRepository {

    private repository: Repository<User>


    constructor(){
        this.repository = getRepository(User)
    }

    async create({driver_license, email, name, password}: ICreateUserDTO): Promise<void> {

        const user = this.repository.create({
            driver_license,
            email,
            name,
            password
           
        
        })
        
       await this.repository.save(user)


    }

    async findByEmail(email: string): Promise<User> {
        
        const EmailAlreadyExists = await this.repository.findOne({email})

        return EmailAlreadyExists;

    }

    async findById(id: string): Promise<User> {

        const userId = await this.repository.findOne(id)

        return userId
    }


}

export {UsersRepository}