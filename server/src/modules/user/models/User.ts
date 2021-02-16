import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class User extends BaseEntity {

    @Field( () => ID )
    @PrimaryGeneratedColumn()
    id: string;

    @Field( () => String )
    @Column()
    username: string;

    @Field( () => String )
    @Column()
    passwordHash: string;

    // posts
    // comments
    // maybe union
}
