/* eslint-disable react/prop-types */
import { $height } from "../../constant";
import { BottomFixedContainer, MT, ScreensWrapper, SmallText, SubText } from "../App";

import Flowers from "./Flowers";
const Home = ({ bg, language }) => {
  return (
    <ScreensWrapper $height={$height} bg={bg}>
      <div style={{ position: "relative", height: $height + "px" }}>
        <Flowers />
        <BottomFixedContainer>
          <SubText>{language ? "Best Compliments" : "स्वागताकांक्षी"}</SubText>
          <MT $MT="0.5vh" />
          <SmallText>{language ? "Shri. Raman Kumar Verma" : "श्री रमन कुमार वर्मा"}</SmallText>
          <SmallText>{language ? "Smt. Geeta Verma" : "श्रीमती गीता वर्मा"}</SmallText>
          <SmallText>{language ? "Family and Relatives" : "समस्त वर्मा परिवार"}</SmallText>
          <MT $MT="4vh" />
        </BottomFixedContainer>
      </div>
    </ScreensWrapper>
  );
};

export default Home;
