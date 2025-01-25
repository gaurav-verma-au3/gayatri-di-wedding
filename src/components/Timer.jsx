/* eslint-disable react/prop-types */
import useCountDown from "../hooks/useCountDown";
import { TimerText } from "../App";

const Timer = ({ date, language }) => {
  const countDown = useCountDown(date, language);

  return <TimerText>{countDown}</TimerText>;
};

export default Timer;
