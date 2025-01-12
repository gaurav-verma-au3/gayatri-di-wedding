import { useEffect, useRef, useState } from "react";

import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    audioRef?.current?.play();
    setPlaying(true);
  };
  const pause = () => {
    audioRef?.current?.pause();
    setPlaying(false);
  };

  useEffect(() => {
    // Autoplay the audio when the component mounts
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setPlaying(true))
        .catch((err) => {
          console.error("Autoplay failed:", err);
        });
    }
  }, []);

  return (
    <>
      <AudioButton>{playing ? <HiSpeakerWave onClick={pause} /> : <HiSpeakerXMark onClick={play} />}</AudioButton>
      <audio ref={audioRef} src={src} autoPlay loop hidden />
    </>
  );
};

export default AudioPlayer;

const AudioButton = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1rem;
  z-index: 1000;
  color: #a88240;
  border-radius: 100%;
  width: 2rem;
  height: 2rem;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 3px solid #a88240;
`;
