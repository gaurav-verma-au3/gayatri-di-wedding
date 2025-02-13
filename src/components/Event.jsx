/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BottomFixedContainer, DateText, MapButton, MT, ScreensWrapper, SmallText, SubText, TimerText } from "../App";
import Flowers from "./Flowers";
import { $height } from "../../constant";
import Timer from "./Timer";
import { useEffect, useState } from "react";
import "dayjs/locale/hi";

dayjs.extend(relativeTime);

const Event = ({ bg, date, venue, cords, language }) => {
  const [time, setTime] = useState("");

  useEffect(() => {
    dayjs.locale(language ? "en" : "hi");
    setTime(dayjs(date).format("DD MMMM YYYY hh:mm a"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);
  return (
    <ScreensWrapper $height={$height} bg={bg}>
      <div style={{ position: "relative", height: $height + "px" }}>
        <Flowers />
        <BottomFixedContainer>
          <DateText>{time}</DateText>
          <Timer date={date} language={language} />
          <MT $MT="1.5vh" />
          <SubText>{language ? "Venue" : "स्थान"}</SubText>
          <div style={{ padding: "0px 2rem" }}>
            <MT $MT="0.5vh" />
            <SmallText>{venue}</SmallText>
          </div>
          <MT $MT="1vh" />
          <TimerText>
            <MapButton href={cords}>{language ? "Open in Maps" : "मैप में खोले"}</MapButton>
          </TimerText>
          <MT $MT="2.5vh" />
        </BottomFixedContainer>
      </div>
    </ScreensWrapper>
  );
};

export default Event;
