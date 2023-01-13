import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const colors = {
    border: "#0075ff",
    error: "#bb2929",
    correct: "#1ed12d"
}

const Form = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media(max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;
`;

const InputGroup = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background-color: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colors.border};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }
`;

const TextError = styled.p`
    font-size: 12px;
    padding-top: 10px;
    color: ${colors.error};
`;

const IconCheck = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
`;

const TermsContainer = styled.div`
    grid-column: span 2;

    input {
        margin-right: 10px;
    }
`;

const CenteredButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    gap: 20px;
`;

const Button = styled.button`
    height: 45px;
    line-height: 45px;
    width: 30%;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;

    &:hover {
        box-shadow: 3px 0px 30px rgb(163, 163, 163, 1);
    }
`;

const ErrorMessage = styled.div`
    height: 45px;
    line-height: 45px;
    background-color: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 2;

    p {
        margin: 0;
    }
    b {
        padding-left: 10px;
    }
`;

const SuccessfulMessage = styled.p`
    font-size: 14px;
    color: ${colors.correct};
`;

export {
    Form, 
    Label, 
    InputGroup, 
    Input, 
    IconCheck, 
    TextError, 
    TermsContainer, 
    CenteredButtonContainer, 
    Button, 
    SuccessfulMessage,
    ErrorMessage
}