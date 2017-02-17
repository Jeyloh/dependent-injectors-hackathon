import React from 'react';
import styled from 'styled-components';

export default class LoginScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {

    const TitleHeader = styled.h2`
        color: #d9d9d9;
        font-weight: 100;
    `;
    const LoginLabel = styled.label`
        color: #d9d9d9;
        font-weight: 200;

    `;
    const InputField = styled.input `
        border: none;
        border-bottom: white 1px solid;
        border-opacity: 0.
        width: 80%;
        color: white;
        padding: 1em;
    `;
    const LoginWrapper = styled.div `
        background: #666;
        padding: 2em;

    `;
    const LoginForm = styled.form `
        display: block;
        width: 100%;
        padding: 4em;
        padding-top: 8em;
        flex-direction: column;
        display: flex;
        border: red solid 1px;
        align-items: center;


    `;
    const LoginButton = styled.button `
        width: 40%;
        height: 3em;
    `;
    const FBLoginButton = styled.button `
        width: 60%;
        height: 3em;
    `;


    return (
      <LoginWrapper>
        <TitleHeader>Sykkelportalen</TitleHeader>
        <LoginForm>
            <LoginLabel></LoginLabel>
            <InputField type="text" title="username" placeholder="username" />
            <InputField type="password" title="password" placeholder="password" />
            <LoginButton type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Login</LoginButton>
            <a className="forgot" href="#">Forgot Username?</a>
            <FBLoginButton type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Login</FBLoginButton>


        </LoginForm>

      </LoginWrapper>
    );
  }
}
