import React, { useEffect, useState } from "react";

function TimeComponent() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(
    function () {
      const id = setInterval(function () {
        const currentTime = new Date();
        const formattedTime = formatTime(currentTime);
        if (formattedTime !== time) {
          setTime(formattedTime);
        }
      }, 1000);

      return () => clearInterval(id);
    },
    [time]
  );

  function formatTime(date) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }

  return <time>For your workout on {time}</time>;
}

export default TimeComponent;
