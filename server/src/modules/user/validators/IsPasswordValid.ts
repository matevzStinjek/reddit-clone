import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
} from "class-validator";

@ValidatorConstraint({ async: true })
class IsPasswordValidConstraint implements ValidatorConstraintInterface {
    async validate( password: string ): Promise<boolean> {
        return violatedConstraints( password ).length === 0;
    }
    defaultMessage({ value: password }: ValidationArguments ): string {
        return violatedConstraints( password ).join( " \n" );
    }
}

export function IsPasswordValid( validationOptions?: ValidationOptions ) {
    return function({ constructor: target }: any, propertyName: string ): void {
        registerDecorator({
            name: "IsPasswordValid",
            target,
            propertyName, // password
            options: validationOptions,
            validator: IsPasswordValidConstraint,
        });
    };
}

function violatedConstraints( password: string ): string[] {
    const constraints = [];

    const minPasswordLength = 8;
    if ( password.length < minPasswordLength ) {
        constraints.push( "Password must be at least 8 characters long." );
    }
    const maxPasswordLength = 32;
    if ( password.length > maxPasswordLength ) {
        constraints.push( "Password must not be longer than 32 characters." );
    }
    const doesPasswordIncludeUppercase = /[A-Z]/.test( password );
    if ( !doesPasswordIncludeUppercase ) {
        constraints.push( "Password must include an uppercase letter." );
    }
    const doesPasswordIncludeLowercase = /[a-z]/.test( password );
    if ( !doesPasswordIncludeLowercase ) {
        constraints.push( "Password must include an uppercase letter." );
    }
    const doesPasswordIncludeNumber = /[0-9]/.test( password );
    if ( !doesPasswordIncludeNumber ) {
        constraints.push( "Password must include a number." );
    }
    const doesPasswordIncludeInvalidSymbols = /[^A-Za-z0-9]/.test( password );
    if ( doesPasswordIncludeInvalidSymbols ) {
        constraints.push( "Password cannot include invalid symbols." );
    }

    return constraints;
}
