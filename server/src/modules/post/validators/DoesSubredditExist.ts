import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { SubredditService } from "modules/subreddit/service";

@ValidatorConstraint({ async: true })
class DoesSubredditExistConstraint implements ValidatorConstraintInterface {
    async validate( name: string ): Promise<boolean> {
        const doesSubredditExist = await SubredditService.doesSubredditExist( name );
        return doesSubredditExist;
    }
    defaultMessage(): string {
        return "Subreddit $value doesn't exists. Choose an existing one.";
    }
}

export function DoesSubredditExist( validationOptions?: ValidationOptions ) {
    return function ({ constructor: target }: any, propertyName: string ): void {
        registerDecorator({
            name: "IsSubredditNameAvailable",
            target, 
            propertyName, // name
            options: validationOptions,
            validator: DoesSubredditExistConstraint,
        });
    };
}
