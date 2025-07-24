import { useState, useEffect } from 'react';

const Homepage = () => {
  const [input, setInput] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const onSubmitStart = (e) => {
    e.preventDefault();
    setMinutesLeft(parseInt(input) - 1);
    setSecondsLeft(59);
    setIsRunning(true);
  };

  const handleEnd = () => {
    setInput(0);
    setMinutesLeft(0);
    setSecondsLeft(0);
    setIsRunning(false);
    setIsPaused(false);
  };

  useEffect(() => {
    if (!isRunning) return;
    const intervalID = setInterval(() => {
      setSecondsLeft((prevSec) => {
        if (prevSec > 0) {
          return prevSec - 1;
        } else {
          // prevSec is 0
          setMinutesLeft((prevMin) => {
            if (prevMin > 0) {
              return prevMin - 1;
            } else {
              // finished
              clearInterval(intervalID);
              setIsRunning(false);
              return 0;
            }
          });
        }
        return 59;
      });
    }, 1000);

    // clean up function
    return () => clearInterval(intervalID);
  }, [isRunning]);

  return (
    <div>
      <form onSubmit={onSubmitStart}>
        <label className="px-3 py-1.5 text-base">Set Minutes</label>
        <input
          type="number"
          required
          onChange={(e) => setInput(e.target.value)}
          className="rounded-md border-none border-gray-500 bg-gray-200 px-3 py-1.5 text-base text-black"
          value={input}
          min={0}
        />
      </form>
      <div>
        <h2 className="px-3 py-1.5 text-xl">
          {minutesLeft} : {secondsLeft}
        </h2>
      </div>
      <div className="flex gap-3 text-black">
        <button
          className="rounded-md bg-red-300 px-1.5 py-1 text-base hover:bg-red-600"
          disabled={input === 0}
          onClick={onSubmitStart}
        >
          {!isRunning ? 'Start' : 'Restart'}
        </button>
        <button
          type="button"
          className="rounded-md bg-red-300 px-1.5 py-1 text-base hover:bg-red-600"
          disabled={input === 0}
          onClick={() => {
            setIsRunning((running) => !running);
            setIsPaused((paused) => !paused);
          }}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
        <button
          type="button"
          className="rounded-md bg-red-300 px-1.5 py-1 text-base hover:bg-red-600"
          onClick={handleEnd}
        >
          End
        </button>
      </div>
    </div>
  );
};

export default Homepage;
