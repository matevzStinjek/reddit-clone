import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType, Field, ID, Int, Authorized } from "type-graphql";
import { genSaltSync, hashSync } from "bcrypt";

@Entity()
@ObjectType()
export class User extends BaseEntity {

    assign ( params: { username: string, password: string }): void {
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

    @Authorized( ["admin"] )
    @Field( () => [String] )
    get roles (): string[] {
        return ( this.rolesString || "" ).split( "," );
    }

    set roles ( rolesArray: string[] ) {
        this.rolesString = rolesArray.join( "," );
    }

    @Field( () => [Int], { nullable: true })
    subredditSubscriptions?: number[];

    // @Field({ nullable: true })
    // posts?: void;

    // @Field({ nullable: true })
    // comments?: void;
}

export class Session extends BaseEntity {
    
}

export class Guest {

    get roles (): string[] {
        return ["guest"];
    }
}
