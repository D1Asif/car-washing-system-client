import React, { useEffect, useState } from 'react';

type CountdownProps = {
    targetDate: string;
};

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<{
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
    }>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const eventTime = new Date(targetDate).getTime();
            const currentTime = new Date().getTime();
            const difference = eventTime - currentTime;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div className='my-3'>
            Slot starts in: &nbsp;
            <span className='bg-gray-100 rounded-md py-2 px-4'>
                {timeLeft.days} Day : {timeLeft.hours} Hr : {timeLeft.minutes} Min : {timeLeft.seconds} Sec
            </span>
        </div>
    );
};

export default Countdown;
