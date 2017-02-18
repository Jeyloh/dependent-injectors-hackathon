/*
 * MobileSim
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import LoginScreen from './../LoginScreen/index';
import SimpleMap from './../SimpleMaps/index'
import styled from 'styled-components';


export default class MobileSim extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {

      // Standard mobile resolution
    const MobileWrapper = styled.div `
        height: 843px;
        width: 400px;
    `;
    const AppDefaults = styled.div `
        background: #666;
        height: inherit;
        width: inherit;
    `;


    return (

        <MobileWrapper>
            <AppDefaults>
                <LoginScreen></LoginScreen>
            </AppDefaults>
        </MobileWrapper>
    );
  }
}
