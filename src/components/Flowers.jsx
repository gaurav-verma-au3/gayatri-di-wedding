// import { images } from "../assets";
import styled from "styled-components";
import * as FlowersLottie from "../assets/flowers.json";
import Lottie from "react-lottie";
import { $height } from "../../constant";

const Flowers = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(FlowersLottie)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <LottieContainer $height={$height}>
      <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
    </LottieContainer>
  );
};

export default Flowers;

const LottieContainer = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => props.$height}px;
  top: 0;
  left: 0;
  background-color: transparent;
`;
