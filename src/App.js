import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Headers from './client/Headers.jsx';
import Item from '../src/client/Item.jsx';

import Accessories from './photos/teslaAccess.jpeg';
import ModelS from './photos/TeslaS.jpeg';
import Model3 from './photos/tesla3.jpeg';
import ModelX from './photos/teslax.jpeg';
import ModelY from './photos/teslay.jpeg';
import SolarRoof from './photos/teslaroof.jpeg';
import SolarPanel from './photos/teslasolarpanels.jpeg';

const MainPage = styled.div`
  margin: 0;
`;

function App() {
    return (
      <MainPage className="App">
       <Headers />
       <div className="app_itemContainer">
          <Item
          title= "Model S"
          desc= "Order Online for "
          desLink=""
          backgroundImg= {ModelS}
          leftBtnTxt= "Custom Order"
          leftBtnLink= ""
          rightBtnTxt= "Existing Inventory"
          rightBtnLink= ""
          twoButtons= "true"
          first
          />
          <Item
          title= "Model Y"
          desc= "Order Online for "
          desLink=""
          backgroundImg= {ModelY}
          leftBtnTxt= "Custom Order"
          leftBtnLink= ""
          rightBtnTxt= "Existing Inventory"
          rightBtnLink= ""
          twoButtons= "true"
          />
          <Item
          title= "Model 3"
          desc= "Order Online for "
          desLink=""
          backgroundImg= {Model3}
          leftBtnTxt= "Custom Order"
          leftBtnLink= ""
          rightBtnTxt= "Existing Inventory"
          rightBtnLink= ""
          twoButtons= "true"
          />
          <Item
          title= "Model X"
          desc= "Order Online for "
          desLink=""
          backgroundImg= {ModelX}
          leftBtnTxt= "Custom Order"
          leftBtnLink= ""
          rightBtnTxt= "Existing Inventory"
          rightBtnLink= ""
          twoButtons= "true"
          />
          <Item
          title= "Lowest Cost Solar Panels in America"
          desc= "Money-back guarantee"
          desLink=""
          backgroundImg= {SolarPanel}
          leftBtnTxt= "ORDER NOW"
          leftBtnLink= ""
          rightBtnTxt= "LEARN MORE"
          rightBtnLink= ""
          twoButtons= "true"
          />
          <Item
          title= "Solar for New Roofs"
          desc= "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          desLink=""
          backgroundImg= {SolarRoof}
          leftBtnTxt= "ORDER NOW"
          leftBtnLink= ""
          rightBtnTxt= "LEARN MORE"
          rightBtnLink= ""
          twoButtons= "true"
          />
          <Item
          title= "Accessories"
          desc= ""
          desLink=""
          backgroundImg= {Accessories}
          centerBtn="SHOP NOW"
          twoButtons= "false"
          />

       </div>
      </MainPage>
    );
}

export default App;
