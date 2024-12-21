import { $height } from "../../constant";
import { BottomFixedContainer, HomeScreenWrapper, MainText, MT, SmallText, SubText } from "../App";

import Flowers from "./Flowers";

const Home = () => {
  return (
    <HomeScreenWrapper $height={$height}>
      <div style={{ position: "relative", height: $height + "px" }}>
        <Flowers />
        <MT $MT="43vh" />
        <MainText>Wedding Invitation</MainText>
        <MT $MT="3vh" />
        <div style={{ padding: "0px 5rem" }}>
          <MainText $align="left">Gayatri</MainText>
          <MainText>Weds</MainText>
          <MainText $align="right">Parvesh</MainText>
        </div>
        <BottomFixedContainer>
          <SubText>Best Compliments</SubText>
          <MT $MT="1vh" />
          <SmallText>Shri.Raman Kumar Verma</SmallText>
          <SmallText>Family and Relatives</SmallText>
          <MT $MT="4vh" />
        </BottomFixedContainer>
      </div>
    </HomeScreenWrapper>
  );
};

export default Home;
