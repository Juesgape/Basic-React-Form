import React, {useState} from "react";
import {Form, Label, TermsContainer, CenteredButtonContainer, Button, SuccessfulMessage, ErrorMessage} from './elements/forms.js'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'

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

  const confirmPassword2 = () => {
    if(password.space.length > 0) {
      if(password.space !== password2.space) {
        changePassword2((prevState) => {
          return {...prevState, valid: 'false'}
        })
      } else {
        changePassword2((prevState) => {
          return {...prevState, valid: 'true'}
        })
      }
    }
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
          regularExpression={expressions.user}
        />


        <InputComponent
          state = {name}
          changeState = {changeName}
          type='text'
          label='Name'
          placeholder='Juanito Alcachofas'
          name='name'
          errorMessage='Incorrect name'
          regularExpression={expressions.name}
        />


        <InputComponent
          state = {mail}
          changeState = {changeMail}
          type='email'
          label='Mail'
          placeholder='Mail@email.com'
          name='mail'
          errorMessage='Incorrect E-mail direction'
          regularExpression={expressions.mail}
        />

        <InputComponent
          state = {cell}
          changeState = {changeCell}
          type='text'
          label='Cell'
          placeholder='4967890911'
          name='cell'
          errorMessage='Incorrect cellphone number'
          regularExpression={expressions.cellphone}
        />

        <InputComponent
          state = {password}
          changeState = {changePassword}
          type='password'
          label='Password'
          placeholder='Enter your password'
          name='password'
          errorMessage='The user must be max 16 digits long and it can only contain numbers, letters and underscore'
          regularExpression={expressions.password}
        />

        <InputComponent
          state = {password2}
          changeState = {changePassword2}
          type='password'
          label='Confirm Password'
          placeholder='Confirm password'
          name='password2'
          errorMessage="Password doesn't match"
          functionPassword={confirmPassword2}
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
