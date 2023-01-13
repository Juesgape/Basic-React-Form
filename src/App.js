import React from "react";
import {Form, Label, InputGroup, Input, TextError, IconCheck, TermsContainer, CenteredButtonContainer, Button, SuccessfulMessage, ErrorMessage} from './elements/forms.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark, faCircleCheck, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

const App = () => {
  return (  
    <main>
      <Form action="">

        <div>
          <Label htmlFor='user'>User</Label>
          <InputGroup>
            <Input type='text' placeholder='User' id="user"></Input>
            <IconCheck icon={faCircleCheck}></IconCheck>
          </InputGroup>
          <TextError>Blah blah blah user</TextError>
        </div>

        <TermsContainer>
          <Label>
            <input type='checkbox' name='terms' id='terms'></input>
            Accept Terms and Conditions
          </Label>
        </TermsContainer>

        <ErrorMessage>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
            <b>Error:</b>
            Please fill out the form correctly
          </p>
        </ErrorMessage>

        <CenteredButtonContainer>
          <Button type="submit">Send</Button>
          <SuccessfulMessage>The form was saved sucessfully!</SuccessfulMessage>
        </CenteredButtonContainer>

      </Form>
    </main>
  );
}

export default App;
