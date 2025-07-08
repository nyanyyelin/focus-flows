const Timer = () => {
  return (
    <div className="flex flex-col gap-5 px-4 py-4">
      <div className="flex justify-between">
        <span className="text-sm">Current Task: Coding</span>
        <button className="rounded-lg bg-gray-300 px-5 py-2 text-sm text-black hover:bg-gray-400">
          Add Task
        </button>
      </div>
      <div className="bg-windowbg w-[28rem] self-center rounded-xl border border-gray-400 pb-0">
        <div className="grid grid-cols-2 rounded-b-lg border-b">
          <div className="borde rounded-l-lg border-r py-1 text-center">
            <h2 className="text-lg font-semibold">Focus</h2>
            <span className="text-sm font-thin">1 of 4</span>
          </div>
          <div className="rounded-r-lg py-1 text-center">
            <h2 className="text-lg font-semibold">Break</h2>
            <span className="text-sm font-thin">0 of 3</span>
          </div>
        </div>
        <div className="m-12 px-3 py-4 text-center text-8xl font-light">
          45 : 30
        </div>
        <div className="flex justify-center px-0">
          <button className="m-3 w-full rounded-xl bg-gray-300 px-3 py-2 text-sm text-black hover:bg-gray-400">
            Start
          </button>
          <button className="m-3 w-full rounded-xl bg-gray-300 px-3 py-1 text-sm text-black hover:bg-gray-400">
            End
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
