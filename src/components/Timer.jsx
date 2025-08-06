import CurrentTaskDetails from './CurrentTaskDetails';
import TimerButton from './TimerButton';

const Timer = () => {
  return (
    <div className="grid grid-cols-[1fr_30rem_1fr] gap-5 px-4 py-3">
      <CurrentTaskDetails />

      <div className="bg-windowbg border-bordergray self-center rounded-xl border pb-0 shadow-sm">
        <div className="grid grid-cols-2 rounded-b-lg border-b border-b-[#302f2f]">
          <div className="border-r-bordergray rounded-l-lg border-r py-1 text-center text-white">
            <h2 className="text-lg font-semibold">Focus</h2>
            <span className="text-sm font-thin">1 of 4</span>
          </div>
          <div className="rounded-r-lg py-1 text-center">
            <h2 className="text-lg font-semibold">Break</h2>
            <span className="text-sm font-thin">0 of 3</span>
          </div>
        </div>
        <div className="m-8 px-3 py-4">
          <h1 className="text-center text-8xl text-white">25 : 00</h1>
        </div>
        <div className="flex justify-center px-0">
          <TimerButton>Start</TimerButton>
          <TimerButton>End</TimerButton>
        </div>
      </div>

      <div className="self-start justify-self-end rounded-lg border border-dashed px-2 py-1 text-amber-300 hover:text-amber-400">
        Get Pro Features
      </div>
    </div>
  );
};

export default Timer;
