import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid';


@Entity("users")
class User {

    @Column()
    id?: string

    @Column()
    name: string

    @PrimaryColumn()
    username: string

    @Column()
    password: string

    @Column()
    email: string

    @Column()
    driver_license: string

    @Column()
    isAdmin: boolean

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }

}

export {User}


