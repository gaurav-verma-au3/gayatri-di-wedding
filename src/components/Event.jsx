/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { BottomFixedContainer, DateText, EventImage, MainText, MapButton, MT, ScreensWrapper, SmallText, SubText, TimerText } from "../App";
import Flowers from "./Flowers";
import { $height } from "../../constant";
import Timer from "./Timer";

dayjs.extend(relativeTime);

const Event = ({ image, title, date, venue, cords }) => {
  return (
    <ScreensWrapper $height={$height}>
      <div style={{ position: "relative", height: $height + "px" }}>
        <Flowers />
        <EventImage src={image} alt={title} />
        <MainText>{title}</MainText>
        <MT $MT="0.5vh" />
        <DateText>{dayjs(date).format("DD MMM YYYY hh:mm a")}</DateText>
        <MT $MT="0.5vh" />
        <Timer date={date} />
        <BottomFixedContainer>
          <SubText>Venue</SubText>
          <MT $MT="1vh" />
          <div style={{ padding: "0px 2rem" }}>
            <SmallText>{venue}</SmallText>
          </div>
          <MT $MT="1.5vh" />
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
