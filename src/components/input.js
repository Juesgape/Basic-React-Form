import React from "react";
import {Input, Label, InputGroup, TextError, IconCheck} from './../elements/forms'
import {faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons'

const InputComponent = ({state, changeState, type, label, placeholder, name, errorMessage, validation, regularExpression, functionPassword}) => {
    const onChange = (e) => {
        changeState({...state, space: e.target.value})
    }

    const isValid = () => {
        if(regularExpression) {
            if(regularExpression.test(state.space)) {
                changeState({...state, valid: 'true'})
            } else {
                changeState({...state, valid: 'false'})
            }
        }
        if(functionPassword) {
            functionPassword()
        }
    }
    
    return(
        <div>
            <Label htmlFor={name} valid={state.valid}>{label}</Label>
            <InputGroup>
                <Input valid={state.valid}
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    value={state.space}
                    onChange={onChange}
                    regularExpression={regularExpression}
                    onKeyUp={isValid}
                    onBlur={isValid}
                    validation={state.valid}
                    >
                    
                </Input>
                <IconCheck 
                    icon={state.valid === 'true' ? faCircleCheck : faCircleXmark} valid={state.valid}></IconCheck>
            </InputGroup>
            <TextError valid={state.valid}>{errorMessage}</TextError>
        </div>
    );
}

export default InputComponent;