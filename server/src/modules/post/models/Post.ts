import { Field, ID, ObjectType } from "type-graphql";
import { Entity, BaseEntity, Column, ManyToOne, RelationId, PrimaryGeneratedColumn } from "typeorm";
import { TypeormLoader } from "type-graphql-dataloader";
import { User, Subreddit } from "models";
import { CreatePost } from "../signatures";

@Entity()
@ObjectType()
export class Post extends BaseEntity {

    assign( params: CreatePost, author: User ): void {
        this.title = params.title;
        this.content = params.content;
        this.subredditId = params.subredditId;
        this.author = author;
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
    @TypeormLoader( () => User, ( post: Post ) => post.authorId )
    author: User;

    @RelationId( ( post: Post ) => post.author )
    authorId: string;

    @Field( () => Subreddit )
    @ManyToOne( () => Subreddit, ( subreddit: Subreddit ) => subreddit.posts )
    @TypeormLoader( () => Subreddit, ( post: Post ) => post.subredditId )
    subreddit: Subreddit;

    @RelationId( ( post: Post ) => post.subreddit )
    @Column()
    subredditId: string;

    // comments: Comment[];
}
