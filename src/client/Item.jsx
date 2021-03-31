import React from 'react';
import Button from './Button.jsx';
import styled from 'styled-components';

const ItemDiv = styled.div`
  height: 110vh;
  width: 100vw;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  scroll-snap-align: start;
`;

const ItemContent = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  font-size: 34px;
  align-items: center;
  color: white;
  flex: 1;
`;

const Itemdesc = styled.div`
  font-weight: 200;
  font-size: 20px;
`;

const LowerItem = styled.div`
  margin-bottom: 20%;
  display: flex;
  flex-direction: column;
`;

const LowerBtns = styled.div`
  display: flex;
`;

const LowerExpand = styled.div`
  color: white;
  width: 100%;
  margin-top: 3%;
  justify-content: center;
`;

const Item = ({title, desc, desLink, backgroundImg, leftBtnTxt, leftBtnLink, rightBtnText, rightBtnLink, twoButtons, centerBtn, first}) => {
  return (
    <ItemDiv className="item" style={{
      background: `url(${backgroundImg})`,
      'backgroundRepeat': 'no-repeat',
    }}>
        <ItemContent>
          <ItemText className="itemContainer">
            <p>{title}</p>
            <Itemdesc className="itemDesc">
              <p>{desc}</p>
            </Itemdesc>
          </ItemText>

          <LowerItem className="itemLower">

            <LowerBtns className="itemBtns">
              {/* always have a button, and conditional for second button
              set up the buttons to be justify content center so either way its centered
              lastly we need the expand icon showing if first prop exists*/}
                <Button imp='primary' text={leftBtnTxt} link={leftBtnLink} />

                {twoButtons && (
                  <Button imp='secondary' text={rightBtnText} link={leftBtnLink} />
                )}
            </LowerBtns>

            <LowerExpand>
              {first && (
                <div>
                  {/* expand icon */}
                </div>
              )}
            </LowerExpand>
          </LowerItem>
        </ItemContent>
    </ItemDiv>
  )
}
export default Item