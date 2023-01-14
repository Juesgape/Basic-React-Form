import React from "react";
import {Form, Label, TermsContainer, CenteredButtonContainer, Button, SuccessfulMessage, ErrorMessage} from './elements/forms.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark, faCircleCheck, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

import InputComponent from './components/input'

const App = () => {
  return (  
    <main>
      <Form action="">

        <InputComponent
          type='text'
          label='User'
          placeholder='Jhon123'
          name='User'
          errorMessage='The user must be max 16 digits long and it can only contain numbers, letters and underscore'
          validation=''
        />

        <InputComponent
          type='password'
          label='Password'
          placeholder='Enter your password'
          name='password'
          errorMessage='The user must be max 16 digits long and it can only contain numbers, letters and underscore'
          validation=''
        />
        

        <TermsContainer>
          <Label>
            <input type='checkbox' name='terms' id='terms'></input>
            Accept Terms and Conditions
          </Label>
        </TermsContainer>

        {false && <ErrorMessage>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}></FontAwesomeIcon>
            <b>Error:</b>
            Please fill out the form correctly
          </p>
        </ErrorMessage>}

        <CenteredButtonContainer>
          <Button type="submit">Send</Button>
          <SuccessfulMessage>The form was saved sucessfully!</SuccessfulMessage>
        </CenteredButtonContainer>

      </Form>
    </main>
  );
}

export default App;
