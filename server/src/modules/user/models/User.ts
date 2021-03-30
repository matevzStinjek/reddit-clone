import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { genSaltSync, hashSync } from "bcrypt";
import { CreateUser } from "../contracts";

@Entity()
@ObjectType()
export class User extends BaseEntity {

    assign ( params: CreateUser ): void {
        this.username = params.username;
        this.password = params.password;
    }

    @Field( () => ID )
    @PrimaryGeneratedColumn()
    id: string;

    @Field()
    @Column()
    username: string;

    @Column()
    passwordHash: string;

    @Column()
    passwordSalt: string;

    set password ( password: string ) {
        const passwordSalt = genSaltSync();
        const passwordHash = hashSync( password, passwordSalt );

        this.passwordSalt = passwordSalt;
        this.passwordHash = passwordHash;
    }

    @Column({ nullable: true })
    rolesString?: string;

    @Field( () => [String] )
    get roles (): string[] {
        return ( this.rolesString || "" ).split( "," ); // primitive deserialization
    }

    set roles ( rolesArray: string[] ) {
        this.rolesString = rolesArray.join( "," ); // primitive serialization
    }

    @Field( () => [Int], { nullable: true })
    subredditSubscriptions?: number[];

    // @Field({ nullable: true })
    // posts?: void;

    // @Field({ nullable: true })
    // comments?: void;
}
