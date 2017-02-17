import React from 'react';
import styled from 'styled-components';

export default class LoginScreen extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {

    const TitleText = styled.h2`
        color: #d9d9d9;
    `;
    const InputField = styled.input `
        border: none;
        border-bottom: white 1px solid;
        width: 80%;
        color: white;
    `;
    const LoginWrapper = styled.div `
        background: #666;
    `;
    const LoginForm = styled.form `
        display: block;
        width: 100%;
        padding: 2em;
    `;

    return (
      <LoginWrapper>
        <TitleText>Logg inn i Sykkelportalen</TitleText>
        <LoginForm>
            <InputField type="text" title="username" placeholder="username" />
            <InputField type="password" title="password" placeholder="password" />
            <button type="submit" class="btn">Login</button>
            <a class="forgot" href="#">Forgot Username?</a>
        </LoginForm>

      </LoginWrapper>
    );
  }
}
