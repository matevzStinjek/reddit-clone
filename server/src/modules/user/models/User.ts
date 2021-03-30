import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { genSaltSync, hashSync } from "bcrypt";
import { Post } from "models";
import { CreateUser } from "../signatures";

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

    @Field( () => [Post] )
    @OneToMany( () => Post, ( post: Post ) => post.author )
    posts: Promise<Post[]>;

    // @Field({ nullable: true })
    // comments?: void;
}
