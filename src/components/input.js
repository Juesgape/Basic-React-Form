import React from "react";
import {Input, Label, InputGroup, TextError, IconCheck} from './../elements/forms'
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'

const InputComponent = ({type, label, placeholder, name, errorMessage, validation}) => {
    return(
        <div>
            <Label htmlFor={name}>{label}</Label>
            <InputGroup>
                <Input type='text' placeholder={placeholder} id={name}></Input>
                <IconCheck icon={faCircleCheck}></IconCheck>
            </InputGroup>
            <TextError>{errorMessage}</TextError>
        </div>
    );
}

export default InputComponent;