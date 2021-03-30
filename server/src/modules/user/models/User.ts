import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, RelationId, PrimaryGeneratedColumn } from "typeorm";
import { TypeormLoader } from "type-graphql-dataloader";
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


    @Field( () => [Post] )
    @OneToMany( () => Post, ( post: Post ) => post.author )
    @TypeormLoader( () => Post, ( user: User ) => user.postIds )
    posts: Post[];

    @RelationId( ( user: User ) => user.posts )
    postIds: string[];

    
    // comments: Commentp[];

    // joinedSubreddits: Subreddit[];
}
