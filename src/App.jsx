import styled from "styled-components";
import "./App.css";

import Home from "./components/Home";
import { images } from "./assets";
import Event from "./components/Event";
import { $height } from "../constant";

const time = {
  ringCeremony: "2025-01-20T13:00:00",
  haldiCeremony: "2025-02-18T13:00:00",
  mehandiCeremony: "2025-02-19T13:00:00",
  sangeetCeremony: "2025-02-19T17:00:00",
  weddingCeremony: "2025-02-22T19:00:00",
  vidayiCeremony: "2025-02-23T13:00:00",
};

const place = {
  ringCeremony: "https://maps.google.com/?q=26.917857,81.1812233",
  haldiCeremony: "https://maps.google.com/?q=26.743497,81.406681",
  mehandiCeremony: "https://maps.google.com/?q=26.743497,81.406681",
  sangeetCeremony: "https://maps.google.com/?q=26.743497,81.406681",
  weddingCeremony: "https://maps.google.com/?q=26.903688,81.15479",
  vidayiCeremony: "https://maps.google.com/?q=26.903688,81.154797",
};

function App() {
  return (
    <Wrapper>
      <Mobile $height={$height}>
        <Home />
        <Event title={"Ring Ceremony"} image={images.engagement} date={time.ringCeremony} venue={"Regal Palace, Regal palace road, Near Jal Nigam, office, Yogashram Rd, Awas Vikas Colony, Barabanki, 225001"} cords={place.ringCeremony} />
        <Event title={"Haldi Ceremony"} image={images.haldi} date={time.haldiCeremony} venue={"Vill + Post Uchita, Siddhaur - Quaiserganj Road, Barabanki 225413"} cords={place.ringCeremony} />
        <Event title={"Mehandi Ceremony"} image={images.mehandi} date={time.mehandiCeremony} venue={"Vill + Post Uchita, Siddhaur - Quaiserganj Road, Barabanki 225413"} cords={place.ringCeremony} />
        <Event title={"Sangeet Ceremony"} image={images.sangeet} date={time.sangeetCeremony} venue={"Vill + Post Uchita, Siddhaur - Quaiserganj Road, Barabanki 225413"} cords={place.ringCeremony} />
        <Event title={"Wedding Ceremony"} image={images.wedding} date={time.weddingCeremony} venue={"S.K. Marriage lawn, NH 27, Kurauli, Uttar Pradesh 225001"} cords={place.ringCeremony} />
        <Event title={"Vidayi Ceremony"} image={images.vidayii} date={time.vidayiCeremony} venue={"S.K. Marriage lawn, NH 27, Kurauli, Uttar Pradesh 225001"} cords={place.vidayiCeremony} />
      </Mobile>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  justify-content: center;
`;
const Mobile = styled.div`
  width: 100%;
  max-width: 500px;
  height: ${(props) => props.$height}px;
  overflow-y: scroll;
  background-color: red;
  scroll-snap-type: y mandatory;
`;

export const ScreensWrapper = styled.div`
  height: ${(props) => props.$height}px;
  width: 100%;
  scroll-snap-align: start;
  background: url(${images.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
export const HomeScreenWrapper = styled.div`
  height: ${(props) => props.$height}px;
  width: 100%;
  scroll-snap-align: start;
  background: url(${images.HomeBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const EventImage = styled.img`
  padding-top: 35vh;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 200px;
`;

export const BottomFixedContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 500px;
`;

export const MainText = styled.p`
  font-family: "Beau Rivage", serif;
  font-weight: 400;
  font-style: normal;
  text-align: ${(props) => props.$align || "center"};
  font-size: 2.5rem;
  color: #e91e23;
`;
export const SubText = styled.p`
  font-family: "Poppins", serif;
  text-align: ${(props) => props.$align || "center"};
  color: #fec601;
`;

export const SmallText = styled.p`
  font-size: 0.8rem;
  font-family: "Poppins", serif;
  text-align: ${(props) => props.$align || "center"};
  color: #fec601;
`;
export const TimerText = styled.p`
  color: #e91e23;
  font-family: "Poppins", serif;
  font-size: 1rem;
  text-align: ${(props) => props.$align || "center"};
`;

export const DateText = styled.p`
  color: #e91e23;
  font-family: "Poppins", serif;
  font-size: 1.2rem;
  text-align: ${(props) => props.$align || "center"};
`;

export const MapButton = styled.a`
  font-size: 0.8rem;
  font-family: "Poppins", serif;
  text-align: ${(props) => props.$align || "center"};
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  color: #fec601;
  border: 2px solid #fec601;
  border-radius: 5px;
`;

export const MT = styled.div`
  padding-top: ${(props) => props.$MT};
`;
