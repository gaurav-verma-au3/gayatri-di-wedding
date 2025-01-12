/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BottomFixedContainer, DateText, MapButton, MT, ScreensWrapper, SmallText, SubText, TimerText } from "../App";
import Flowers from "./Flowers";
import { $height } from "../../constant";
import Timer from "./Timer";

dayjs.extend(relativeTime);

const Event = ({ bg, date, venue, cords }) => {
  return (
    <ScreensWrapper $height={$height} bg={bg}>
      <div style={{ position: "relative", height: $height + "px" }}>
        <Flowers />
        <BottomFixedContainer>
          <DateText>{dayjs(date).format("DD MMM YYYY hh:mm a")}</DateText>
          <Timer date={date} />
          <MT $MT="1.5vh" />
          <SubText>Venue</SubText>
          <div style={{ padding: "0px 2rem" }}>
            <MT $MT="0.5vh" />
            <SmallText>{venue}</SmallText>
          </div>
          <MT $MT="1vh" />
          <TimerText>
            <MapButton href={cords}>Open in Maps</MapButton>
          </TimerText>
          <MT $MT="2.5vh" />
        </BottomFixedContainer>
      </div>
    </ScreensWrapper>
  );
};

export default Event;
