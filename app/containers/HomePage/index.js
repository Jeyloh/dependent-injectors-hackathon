import React from 'react';
import styled from 'styled-components';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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
    `;
    const LoginWrapper = styled.div `
        background: #666;
        padding: 2em;
    `;
    const LoginForm = styled.form `
        display: block;
        width: 100%;
        padding: 2em;
    `;

    return (
      <LoginWrapper>
        <TitleHeader>Sykkelportalen</TitleHeader>
        <LoginForm>
            <LoginLabel></LoginLabel>
            <InputField type="text" title="username" placeholder="username" />
            <InputField type="password" title="password" placeholder="password" />
            <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">Login</button>


            <a className="forgot" href="#">Forgot Username?</a>
        </LoginForm>

      </LoginWrapper>
    );
  }
}