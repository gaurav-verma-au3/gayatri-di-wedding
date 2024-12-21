import { useEffect, useState } from "react";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const useCountDown = (futureDate) => {
  const [timeRemaining, setTimeRemaining] = useState(() => calculateTimeRemaining(futureDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(futureDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [futureDate]);

  return timeRemaining;
};

const calculateTimeRemaining = (futureDate) => {
  const now = dayjs();
  const eventDate = dayjs(futureDate);

  if (eventDate.isBefore(now)) {
    return "Done";
  }

  const diff = dayjs.duration(eventDate.diff(now));

  const months = diff.months();
  const days = diff.days();
  const hours = diff.hours();
  const minutes = diff.minutes();
  const seconds = diff.seconds();

  return `${months ? `${months} ${months > 1 ? "Months" : "Month"}` : ""}  ${days}d ${hours}h ${minutes}m ${seconds}s`;
};

export default useCountDown;

// Usage example:
// import useCountdown from './useCountdown';
// const MyComponent = () => {
//   const countdown = useCountdown('2024-12-25T00:00:00');
//   return <div>{countdown}</div>;
// };
