import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from "class-validator";
import { UserService } from "../service";

@ValidatorConstraint({ async: true })
class IsUsernameAvailableConstraint implements ValidatorConstraintInterface {
    async validate( username: string ): Promise<boolean> {
        const user = await UserService.doesUsernameExist( username );
        return !user;
    }
    defaultMessage(): string {
        return "User $value already exists. Choose another name.";
    }
}

export function IsUsernameAvailable( validationOptions?: ValidationOptions ) {
    return function ({ constructor: target }: any, propertyName: string ): void {
        registerDecorator({
            name: "IsUsernameAvailable",
            target, 
            propertyName, // username
            options: validationOptions,
            validator: IsUsernameAvailableConstraint,
        });
    };
}
