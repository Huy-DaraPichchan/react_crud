import { useState, useEffect } from "react";

const useCountdown = (minutes, seconds, isPaused, setIsPaused) => {
    const [time, setTime] = useState({minutes, seconds});
    const [cycleCounter, setCycleCounter] = useState(0);

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
            } else if (time.minutes === 0 && time.seconds === 0) {
                setCycleCounter(cycleCounter + 1);
                setTime({minutes, seconds})
                setIsPaused(true);
            }
        }

        return () => clearTimeout(timer);
    }, [time.minutes, time.seconds, isPaused, setIsPaused, cycleCounter, minutes, seconds]);

    return { minutes: time.minutes, seconds: time.seconds, cycleCounter };
}

export default useCountdown;