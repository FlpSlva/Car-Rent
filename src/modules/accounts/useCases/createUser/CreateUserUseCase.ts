import { inject, injectable } from "tsyringe";
import {hash} from 'bcrypt'
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { AppError } from "../../../../errors/App.Error";


@injectable()
class CreateUserUseCase {

    constructor(
        @inject("UsersRepository")
        private createUserUseCase: IUsersRepository
    ) {}
    
    async execute({driver_license, email, name, password}: ICreateUserDTO): Promise<void>{

        const EmailAlreadyExists = await this.createUserUseCase.findByEmail(
            email
        )

        if(EmailAlreadyExists) {
            throw new AppError("User Already Exists !")
        }

        const passwordHash = await hash(password, 8)

        await this.createUserUseCase.create({
            driver_license,
            email,
            name,
            password: passwordHash,
            
        })

    }


}

export {CreateUserUseCase}