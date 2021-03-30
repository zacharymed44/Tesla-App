import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TezlaS from './client/TezlaS.jsx';
import TezlaX from './client/TezlaX.jsx';
import Tezla3 from './client/Tezla3.jsx';
import TezlaY from './client/TezlaY.jsx';
import SolarP from './client/SolarP.jsx';
import SolarR from './client/SolarR.jsx';

const WebPage = styled.div`
  display: flex;
`;

const Tezla = styled.h3`
  @font-face {
    font-family: tezla; src: url('TESLA.ttf');
  }
  font-family: tezla;
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: transparent;
  background: none;
  top: 0;
`;

const BtnApp = styled.button `
  text-decoration: none;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;

`;

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

  }

  render(){
    return (
      <Toolbar>
      <Tezla>T E Z L A</Tezla>
      <div>
      <BtnApp name="tezlaS">Tezla S</BtnApp>
      <BtnApp name="tezla3">Tezla 3</BtnApp>
      <BtnApp name="tezlaX">Tezla X</BtnApp>
      <BtnApp name="tezlaY">Tezla Y</BtnApp>
      <BtnApp name="solarR">Solar Roof</BtnApp>
      <BtnApp name="solarP">Solar Panels</BtnApp>
      </div>

      <div>
        <BtnApp name="shop">Shop</BtnApp>
        <BtnApp name="sign in form">Sign in Account</BtnApp>
        <i className="far fa-bars"></i>
      </div>
    </Toolbar>

    <WebPage>
      {this.state.siteId === 1 ? (
        <TezlaS />
      ) : (null)}

      {this.state.siteId === 2 ? (
        <Tezla3 />
      ) : (null)}

      {this.state.siteId === 3 ? (
        <TezlaX />
      ) : (null)}

      {this.state.siteId === 4 ? (
        <TezlaY />
      ) : (null)}

      {this.state.siteId === 5 ? (
        <SolarP />
      ) : (null)}

      {this.state.siteId === 6 ? (
        <SolarR />
      ) : (null)}

    </WebPage>
    )
  }
}

export default TezlaS;