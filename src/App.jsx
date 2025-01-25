import styled from "styled-components";
import "./App.css";

import Home from "./components/Home";
import { audio, images } from "./assets";
import Event from "./components/Event";
import { $height } from "../constant";
import AudioPlayer from "./components/AudioPlayer";
import { useEffect, useState } from "react";

import Switch from "./components/Switch";

const time = {
  ringCeremony: "2025-01-20T12:00:00",
  haldiCeremony: "2025-02-21T12:00:00",
  mehandiCeremony: "2025-02-21T15:00:00",
  sangeetCeremony: "2025-02-21T18:00:00",
  weddingCeremony: "2025-02-22T18:00:00",
  vidayiCeremony: "2025-02-23T11:00:00",
};

// ;

const place = {
  ringCeremony: "https://maps.google.com/?q=26.917857,81.1812233",
  haldiCeremony: "https://maps.google.com/?q=26.9269111,81.2005689",
  mehandiCeremony: "https://maps.google.com/?q=26.9269111,81.2005689",
  sangeetCeremony: "https://maps.google.com/?q=26.9269111,81.2005689",
  weddingCeremony: "https://maps.google.com/?q=26.901886,81.154405",
  vidayiCeremony: "https://maps.google.com/?q=26.901886,81.154405",
};

const address = {
  en: {
    ringCeremony: "Regal Palace, Near Jal Nigam office, Awas Vikas Colony, Barabanki",
    haldiCeremony: "Shrinathji Tiles & Marbles, Faizabad Rd, Patel market, Barabanki",
    mehandiCeremony: "Shrinathji Tiles & Marbles, Faizabad Rd, Patel market, Barabanki",
    sangeetCeremony: "Shrinathji Tiles & Marbles, Faizabad Rd, Patel market, Barabanki",
    weddingCeremony: "S.K. Marriage lawn, NH 27, Kurauli",
    vidayiCeremony: "S.K. Marriage lawn, NH 27, Kurauli",
  },
  hi: {
    ringCeremony: "रीगल पैलेस, निकट जल निगम कार्यालय, आवास विकास कॉलोनी, बाराबंकी",
    haldiCeremony: "श्रीनाथजी टाइल्स एंड मार्बल्स, अयोध्या रोड, पटेल मार्किट, बाराबंकी",
    mehandiCeremony: "श्रीनाथजी टाइल्स एंड मार्बल्स, अयोध्या रोड, पटेल मार्किट, बाराबंकी",
    sangeetCeremony: "श्रीनाथजी टाइल्स एंड मार्बल्स, अयोध्या रोड, पटेल मार्किट, बाराबंकी",
    weddingCeremony: "एस.के. मैरिज लॉन, ऐन एच 27, कुरौली",
    vidayiCeremony: "एस.के. मैरिज लॉन, ऐन एच 27, कुरौली",
  },
};

function App() {
  const [audioSrc, setAudioSrc] = useState(audio.homeMp3);
  const [language, setLanguage] = useState(false);

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
        <SwitchContainer>
          <Switch
            id="lang-switch"
            toggled={language}
            onChange={(e) => {
              console.log({ e });
              setLanguage(e.target.checked);
            }}
          />
        </SwitchContainer>
        <AudioPlayer src={audioSrc} />
        <Home language={language} bg={language ? images.home : images.home_hindi} />
        {/* <Event language={language} bg={language ? images.engagement : images.engagement_hindi} date={time.ringCeremony} venue={language ? address.en.ringCeremony : address.hi.ringCeremony} cords={place.ringCeremony} /> */}
        <Event language={language} bg={language ? images.haldi : images.haldi_hindi} date={time.haldiCeremony} venue={language ? address.en.haldiCeremony : address.hi.haldiCeremony} cords={place.haldiCeremony} />
        <Event language={language} bg={language ? images.mehandi : images.mehandi_hindi} date={time.mehandiCeremony} venue={language ? address.en.mehandiCeremony : address.hi.mehandiCeremony} cords={place.mehandiCeremony} />
        <Event language={language} bg={language ? images.sangeet : images.sangeet_hindi} date={time.sangeetCeremony} venue={language ? address.en.sangeetCeremony : address.hi.sangeetCeremony} cords={place.sangeetCeremony} />
        <Event language={language} bg={language ? images.wedding : images.wedding_hindi} date={time.weddingCeremony} venue={language ? address.en.weddingCeremony : address.hi.weddingCeremony} cords={place.weddingCeremony} />
        <Event language={language} bg={language ? images.vidayi : images.vidayi_hindi} date={time.vidayiCeremony} venue={language ? address.en.vidayiCeremony : address.hi.vidayiCeremony} cords={place.vidayiCeremony} />
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
  background-color: #fffef1;
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

const SwitchContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 1000;
`;
