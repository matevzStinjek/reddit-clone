import { Field, ID, ObjectType } from "type-graphql";
import { Entity, BaseEntity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "models";
import { CreatePost } from "../signatures";

@Entity()
@ObjectType()
export class Post extends BaseEntity {

    assign( params: CreatePost, user: User ): void {
        this.title = params.title;
        this.content = params.content;
        this.author = Promise.resolve( user );
    }

    @Field( () => ID )
    @PrimaryGeneratedColumn()
    id: string;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column( "text" )
    content: string;

    @Field( () => User )
    @ManyToOne( () => User, ( author: User ) => author.posts )
    author: Promise<User>;

    // subreddit: Subreddit;

    // comments: Comment[];
}
