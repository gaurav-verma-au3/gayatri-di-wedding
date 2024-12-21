/* eslint-disable react/prop-types */
import useCountDown from "../hooks/useCountDown";
import { TimerText } from "../App";

const Timer = ({ date }) => {
  const countDown = useCountDown(date);

  return <TimerText>{countDown}</TimerText>;
};

export default Timer;
