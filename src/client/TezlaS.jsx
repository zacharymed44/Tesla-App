import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import backgroundImg from '../photos/mainteslaS.jpeg';
import backgroundImg2 from '../photos/mainTeslaS2.jpeg';
import TeslaSItem from '../client/S_comps/TeslaSItem.jsx';
import TeslaSItem2 from '../client/S_comps/TeslaSItem2.jsx';

const tezlaS_container = styled.div`
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: 100vh;
`;

class TezlaS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <tezlaS_container>
         <TeslaSItem
         title= "Model S"
         desc= "Plaid"
         desLink=""
         backgroundImg= {backgroundImg}
         leftBtnTxt= "Custom Order"
         leftBtnLink= ""
         rightBtnTxt= "Existing Inventory"
         rightBtnLink= ""
         twoButtons= "true"
         first
         />
        <TeslaSItem2
         title= "Model S"
         desc= "Order Online for "
         backgroundImg= {backgroundImg2}
         leftBtnTxt= "Custom Order"
         leftBtnLink= ""
         rightBtnTxt= "Existing Inventory"
         rightBtnLink= ""
         />
      </tezlaS_container>
    )
  }
}

export default TezlaS;