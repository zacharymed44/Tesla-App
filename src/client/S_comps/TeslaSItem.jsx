import React from 'react';
import styled from 'styled-components';

const TSContainer = styled.div`
  height: 110vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;

const TSContent = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TSText = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  font-size: 34px;
  align-items: center;
  color: white;
  flex: 1;
`;

const TSDesc = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const LowerItem = styled.div`
  margin-bottom: 20%;
  display: flex;
  flex-direction: row;
  
  color: white;
`;


const TeslaSItem = ({backgroundImg, title, desc}) => {
  return (
    <TSContainer style={{
      background: `url(${backgroundImg})`,
      'backgroundRepeat': 'no-repeat',
    }}>
      <TSContent>
        <TSText>
          <p>{title}</p>
          <TSDesc>
          <p>{desc}</p>
          </TSDesc>
        </TSText>
        <LowerItem className="itemLower">
          <div>
            <p>390mi</p>
            <p>Range</p>
          </div>
          <div>
            <p>1.99s</p>
            <p>0-60 mph</p>
          </div>
          <div>
            <p>200 MPH</p>
            <p>Top speed</p>
          </div>
        </LowerItem>
      </TSContent>
    </TSContainer>
  )
}

export default TeslaSItem;