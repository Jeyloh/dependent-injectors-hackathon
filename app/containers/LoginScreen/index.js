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
        font-variant: small-caps;
        text-align:center;
    `;
    const LoginLabel = styled.h4`
        color: #d9d9d9;
        font-weight: 200;
        font-size:1.5em;
    `;
    const InputField = styled.input `
        border: none;
        border-bottom: white 1px solid;
        border-opacity: 0.
        width: 80%;
        color: white;
        padding: 2em 4em .5em 4em;
        ::-webkit-input-placeholder {
           text-align: center;
        }
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
        align-items: center;
    `;
    const LoginButton = styled.button `
        width: 80%;
        height: 3em;
        margin: 2em 0;
    `;
    const FBLoginButton = styled.button `
        width: 80%;
        height: 3em;
        margin: 1em 0;

    `;


    return (
      <LoginWrapper className="login-wrapper">
        <TitleHeader>Sykkelportalen</TitleHeader>
        <LoginForm className="login-form">
            <LoginLabel>Login</LoginLabel>
            <InputField type="text" title="username" placeholder="username" />
            <InputField type="password" title="password" placeholder="password" />
            <LoginButton type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">Login</LoginButton>
            <a className="forgot" href="#">Forgot Username?</a>
            <FBLoginButton type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Login Facebook</FBLoginButton>


        </LoginForm>

      </LoginWrapper>
    );
  }
}
