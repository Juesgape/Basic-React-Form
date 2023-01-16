import React, {useState} from "react";
import {Form, Label, TermsContainer, CenteredButtonContainer, Button, SuccessfulMessage, ErrorMessage} from './elements/forms.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleXmark, faCircleCheck, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

import InputComponent from './components/input'

const App = () => {
  const [user, changeUser] = useState({space: '', valid: null});
  const [name, changeName] = useState({space: '', valid: null});
  const [password, changePassword] = useState({space: '', valid: null});
  const [password2, changePassword2] = useState({space: '', valid: null});
  const [mail, changeMail] = useState({space: '', valid: null});
  const [cell, changeCell] = useState({space: '', valid: null});

  const expressions = {
    user: /^[a-zA-Z0-9\_\-]{4,16}$/,
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    cellphone: /^\d{7,14}$/ 
  }

  return (  
    <main>
      <Form action="">

        <InputComponent
          state = {user}
          changeState = {changeUser}
          type='text'
          label='User'
          placeholder='Jhon123'
          name='User'
          errorMessage='The user must be max 16 digits long and it can only contain numbers, letters and underscore'
          validation=''
          regularExpression={expressions.user}
        />

        <InputComponent
          state = {password}
          changeState = {changePassword}
          type='password'
          label='Password'
          placeholder='Enter your password'
          name='password'
          errorMessage='The user must be max 16 digits long and it can only contain numbers, letters and underscore'
          validation=''
          regularExpression={expressions.password}
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
