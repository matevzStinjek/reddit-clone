import { Field, ID, ObjectType } from "type-graphql";
import { TypeormLoader } from "type-graphql-dataloader";
import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryColumn, RelationId } from "typeorm";
import { Post, User } from "models";
import { CreateSubreddit } from "../signatures";

@Entity()
@ObjectType()
export class Subreddit extends BaseEntity {

    assign( params: CreateSubreddit, creator: User ): void {
        this.id = params.name.toLowerCase();
        this.name = params.name;
        this.topic = params.topic;
        this.creator = creator;
    }

    @Field( () => ID )
    @PrimaryColumn()
    id: string;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column({ nullable: true })
    topic?: string;

    @Field( () => User )
    @ManyToOne( () => User, ( creator: User ) => creator.posts )
    @TypeormLoader( () => User, ( subreddit: Subreddit ) => subreddit.creatorId )
    creator: User;

    @RelationId( ( subreddit: Subreddit ) => subreddit.creator )
    creatorId: string;

    @Field( () => [Post] )
    @OneToMany( () => Post, ( post: Post ) => post.subreddit )
    @TypeormLoader( () => Post, ( subreddit: Subreddit ) => subreddit.postIds )
    posts: Post[];

    @RelationId( ( subreddit: Subreddit ) => subreddit.posts )
    postIds: string[];
}
