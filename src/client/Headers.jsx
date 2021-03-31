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
  color: white;
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
  font-size: 20px;
  font-weight: bold;
`;

class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteId: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.emptyState = this.emptyState.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.siteId === '') {
    this.setState({
      siteId: e.target.name
    }, ()=>{
      this.props.changeView()
    })
    } else if (this.state.siteId !== e.target.name) {
      this.setState({
        siteId: e.target.name
      }, () => {
        console.log('new view');
      })
    }
  }

  emptyState(){
    this.setState({
      siteId: ''
    })
  }

  render(){
    return (
      <div className="navbar">
        <ToolBarContainer>
          <TBLeft>
            <Tezla onClick={this.props.loadHomePage}>T E Z L A</Tezla>
          </TBLeft>

          <TBCenter>
            <BtnApp name="tezlaS" onClick={this.handleClick}>Tezla S</BtnApp>
            <BtnApp name="tezla3" onClick={this.handleClick}>Tezla 3</BtnApp>
            <BtnApp name="tezlaX" onClick={this.handleClick}>Tezla X</BtnApp>
            <BtnApp name="tezlaY" onClick={this.handleClick}>Tezla Y</BtnApp>
            <BtnApp name="solarR" onClick={this.handleClick}>Solar Roof</BtnApp>
            <BtnApp name="solarP" onClick={this.handleClick}>Solar Panels</BtnApp>
          </TBCenter>

          <TBRight>
            <BtnApp name="shop">Shop</BtnApp>
            <BtnApp name="sign in form">Sign in Account</BtnApp>
            <i className="far fa-bars"></i>
          </TBRight>
      </ToolBarContainer>

      <WebPage>
        {this.state.siteId === 'tezlaS' ? (
          <TezlaS />
        ) : (null)}

        {this.state.siteId === 'tezla3' ? (
          <Tezla3 />
        ) : (null)}

        {this.state.siteId === 'teslaX' ? (
          <TezlaX />
        ) : (null)}

        {this.state.siteId === 'teslaY' ? (
          <TezlaY />
        ) : (null)}

        {this.state.siteId === 'solarR' ? (
          <SolarR />
        ) : (null)}

        {this.state.siteId === 'solarP' ? (
          <SolarP />
        ) : (null)}

      </WebPage>
    </div>
    )
  }
}

export default Headers;