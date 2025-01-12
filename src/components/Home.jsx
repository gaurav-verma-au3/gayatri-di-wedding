/* eslint-disable react/prop-types */
import { $height } from "../../constant";
import { BottomFixedContainer, MT, ScreensWrapper, SmallText, SubText } from "../App";

import Flowers from "./Flowers";
const Home = ({ bg }) => {
  return (
    <ScreensWrapper $height={$height} bg={bg}>
      <div style={{ position: "relative", height: $height + "px" }}>
        <Flowers />
        <BottomFixedContainer>
          <SubText>Best Compliments</SubText>
          <MT $MT="0.5vh" />
          <SmallText>Shri. Raman Kumar Verma</SmallText>
          <SmallText>Family and Relatives</SmallText>
          <MT $MT="4vh" />
        </BottomFixedContainer>
      </div>
    </ScreensWrapper>
  );
};

export default Home;
