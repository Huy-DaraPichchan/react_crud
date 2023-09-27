import { useState, useEffect } from "react";

const useCountdown = (minutes, seconds, isPaused) => {
    const [time, setTime] = useState({minutes, seconds});

    useEffect(() => {
        let timer;

        if (!isPaused) {
            if (time.minutes > 0 || time.seconds > 0) {
                timer = setTimeout(() => {
                    if (time.seconds === 0) {
                        setTime({minutes: time.minutes - 1, seconds: 59});
                    } else {
                        setTime({minutes: time.minutes, seconds: time.seconds - 1})
                    }
                }, 1000);
            }
        }

        return () => clearTimeout(timer);
    }, [time.minutes, time.seconds, isPaused]);


    return time
}

export default useCountdown;