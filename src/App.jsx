import styled from "styled-components";
import "./App.css";

import Home from "./components/Home";
import { audio, images } from "./assets";
import Event from "./components/Event";
import { $height } from "../constant";
import AudioPlayer from "./components/AudioPlayer";
import { useEffect, useState } from "react";

const time = {
  ringCeremony: "2025-01-20T13:00:00",
  haldiCeremony: "2025-02-21T12:00:00",
  mehandiCeremony: "2025-02-21T15:00:00",
  sangeetCeremony: "2025-02-21T18:00:00",
  weddingCeremony: "2025-02-22T20:00:00",
  vidayiCeremony: "2025-02-23T13:00:00",
};

// ;

const place = {
  ringCeremony: "https://maps.google.com/?q=26.917857,81.1812233",
  haldiCeremony: "https://maps.google.com/?q=26.9269111,81.2005689",
  mehandiCeremony: "https://maps.google.com/?q=26.9269111,81.2005689",
  sangeetCeremony: "https://maps.google.com/?q=26.9269111,81.2005689",
  weddingCeremony: "https://maps.google.com/?q=26.903688,81.154797",
  vidayiCeremony: "https://maps.google.com/?q=26.903688,81.154797",
};

const address = {
  ringCeremony: "Regal Palace, Near Jal Nigam office, Awas Vikas Colony, Barabanki",
  haldiCeremony: "Shrinathji Tiles & Marbles, Faizabad Rd, Patel market, Barabanki",
  mehandiCeremony: "Shrinathji Tiles & Marbles, Faizabad Rd, Patel market, Barabanki",
  sangeetCeremony: "Shrinathji Tiles & Marbles, Faizabad Rd, Patel market, Barabanki",
  weddingCeremony: "S.K. Marriage lawn, NH 27, Kurauli",
  vidayiCeremony: "S.K. Marriage lawn, NH 27, Kurauli",
};

function App() {
  const [audioSrc, setAudioSrc] = useState(audio.homeMp3);

  const handleScroll = (e) => {
    const top = e.target.scrollTop;
    switch (top) {
      case 0:
        setAudioSrc(audio.homeMp3);
        break;
      case $height * 1:
        setAudioSrc(audio.ringMp3);
        break;
      case $height * 2:
        setAudioSrc(audio.haldiMp3);
        break;
      case $height * 3:
        setAudioSrc(audio.mehandiMp3);
        break;
      case $height * 4:
        setAudioSrc(audio.sangeetMp3);
        break;
      case $height * 5:
        setAudioSrc(audio.shadiMp3);
        break;
      case $height * 6:
        setAudioSrc(audio.vidayiMp3);
        break;
      default:
        // setAudioSrc(audio.homeMp3);
        break;
    }
  };

  useEffect(() => {
    document.getElementById("mobile").addEventListener("scroll", handleScroll);
    return () => document.getElementById("mobile").removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <Mobile id="mobile" $height={$height}>
        <AudioPlayer src={audioSrc} />
        <Home bg={images.home} />
        <Event bg={images.engagement} title={"Ring Ceremony"} image={images.engagement} date={time.ringCeremony} venue={address.ringCeremony} cords={place.ringCeremony} />
        <Event bg={images.haldi} title={"Haldi Ceremony"} image={images.haldi} date={time.haldiCeremony} venue={address.haldiCeremony} cords={place.haldiCeremony} />
        <Event bg={images.mehandi} title={"Mehandi Ceremony"} image={images.mehandi} date={time.mehandiCeremony} venue={address.mehandiCeremony} cords={place.mehandiCeremony} />
        <Event bg={images.sangeet} title={"Sangeet Ceremony"} image={images.sangeet} date={time.sangeetCeremony} venue={address.sangeetCeremony} cords={place.sangeetCeremony} />
        <Event bg={images.wedding} title={"Wedding Ceremony"} image={images.wedding} date={time.weddingCeremony} venue={address.weddingCeremony} cords={place.weddingCeremony} />
        <Event bg={images.vidayi} title={"Vidayi Ceremony"} image={images.vidayii} date={time.vidayiCeremony} venue={address.vidayiCeremony} cords={place.vidayiCeremony} />
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
  background: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const BottomFixedContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 500px;
`;

export const SubText = styled.p`
  text-align: ${(props) => props.$align || "center"};
  color: #a88240;
  font-weight: 600;
`;

export const SmallText = styled.p`
  font-size: 0.8rem;
  text-align: ${(props) => props.$align || "center"};
  color: #a88240;
`;
export const TimerText = styled.p`
  color: #a88240;
  font-size: 1rem;
  font-weight: 800;
  text-align: ${(props) => props.$align || "center"};
`;

export const DateText = styled.p`
  color: #a88240;
  font-size: 1.1rem;
  font-weight: 800;
  text-align: ${(props) => props.$align || "center"};
`;

export const MapButton = styled.a`
  font-size: 0.8rem;
  text-align: ${(props) => props.$align || "center"};
  text-decoration: none;
  padding: 0.3rem 0.5rem;
  color: #a88240;
  border: 2px solid #a88240;
  border-radius: 5px;
`;

export const MT = styled.div`
  padding-top: ${(props) => props.$MT};
`;
