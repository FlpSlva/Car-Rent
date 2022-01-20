import {container} from 'tsyringe'

import {ICategoryRepository} from '../../../modules/cars/repositories/ICategoriesRepository'
import {CategoriesRepository} from '../../../modules/cars/repositories/implementations/CategoriesRepository'

import { SpecificationsRepository } from '../../../modules/cars/repositories/implementations/SpecificationsRepository'
import { ISpecificationsRepository } from '../../../modules/cars/repositories/ISpecificationsRepositorty'

import {IUsersRepository} from '../../../modules/accounts/repositories/IUsersRepository'
import {UsersRepository} from '../../../modules/accounts/repositories/implementations/UsersRepository'



container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository", 
    CategoriesRepository
)

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository", 
    SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)