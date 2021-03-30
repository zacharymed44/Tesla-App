import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Headers from './client/Headers.jsx';


const MainPage = styled.div`

`;


class App extends React.Component {
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

  render() {
    return (
      <MainPage className="App">
       <Headers />
       {/* items */}
       {/* items */}
       {/* items */}
       {/* items */}


      </MainPage>
    );
  }
}

export default App;
