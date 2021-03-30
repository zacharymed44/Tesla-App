import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TezlaS from './TezlaS.jsx';
import TezlaX from './TezlaX.jsx';
import Tezla3 from './Tezla3.jsx';
import TezlaY from './TezlaY.jsx';
import SolarP from './SolarP.jsx';
import SolarR from './SolarR.jsx';


const WebPage = styled.div`
  display: flex;
`;

const Tezla = styled.h3`
  @font-face {
    font-family: tezla; src: url('TESLA.ttf');
  }
  font-family: tezla;
`;

const ToolBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: transparent;
  background: none;
  width: 100vw;
  top: 0;
  z-index: 100;
  position: fixed;
  margin: 15px;
  margin-top: 15px;

`;

const TBLeft = styled.div`
  height: 24px;
  width: 110px;
  margin-top: 7px;
`;

const TBCenter = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const TBRight = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 15px;
`;

const BtnApp = styled.button `
  text-decoration: none;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 5px;
  margin-right: 5px;
  color: white;

`;

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteId: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

  }

  render(){
    return (
      <div className="navbar">
        <ToolBarContainer>
          <TBLeft>
            <Tezla>T E Z L A</Tezla>
          </TBLeft>

          <TBCenter>
            <BtnApp name="tezlaS">Tezla S</BtnApp>
            <BtnApp name="tezla3">Tezla 3</BtnApp>
            <BtnApp name="tezlaX">Tezla X</BtnApp>
            <BtnApp name="tezlaY">Tezla Y</BtnApp>
            <BtnApp name="solarR">Solar Roof</BtnApp>
            <BtnApp name="solarP">Solar Panels</BtnApp>
          </TBCenter>

          <TBRight>
            <BtnApp name="shop">Shop</BtnApp>
            <BtnApp name="sign in form">Sign in Account</BtnApp>
            <i className="far fa-bars"></i>
          </TBRight>
      </ToolBarContainer>

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
    </div>
    )
  }
}

export default Headers;