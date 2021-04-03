import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { SubredditService } from "../service";

@ValidatorConstraint({ async: true })
class IsSubredditNameAvailableConstraint implements ValidatorConstraintInterface {
    async validate( name: string ): Promise<boolean> {
        const doesSubredditNameExist = await SubredditService.doesSubredditExist( name );
        return !doesSubredditNameExist;
    }
    defaultMessage(): string {
        return "Subreddit $value already exists. Choose another name.";
    }
}

export function IsSubredditNameAvailable( validationOptions?: ValidationOptions ) {
    return function({ constructor: target }: any, propertyName: string ): void {
        registerDecorator({
            name: "IsSubredditNameAvailable",
            target,
            propertyName, // name
            options: validationOptions,
            validator: IsSubredditNameAvailableConstraint,
        });
    };
}
