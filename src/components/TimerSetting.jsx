const TimerSetting = ({ onSubmitStart, input, setInput }) => {
  return (
    <div className="flex flex-col items-center gap-y-7">
      <h1 className="text-center text-xl text-white">Timer Setting</h1>
      <form
        onSubmit={onSubmitStart}
        className="grid grid-cols-[8rem_15rem] gap-y-7"
      >
        <label className="px py-1.5 text-base text-white">
          Focus (Minutes){' '}
        </label>
        <input
          type="number"
          required
          onChange={(e) => setInput(e.target.value)}
          className="rounded-md border-none bg-gray-300 px-2 py-1.5 text-base text-black transition-colors duration-300 focus:bg-white"
          value={input}
          defaultValue={25}
          min={0}
        />
        <label className="px py-1.5 text-base text-white">Short Break</label>
        <input
          type="number"
          required
          onChange={(e) => setInput(e.target.value)}
          className="rounded-md border-none bg-gray-300 px-2 py-1.5 text-base text-black transition-colors focus:bg-white"
          value={input}
          defaultValue={5}
          min={0}
        />
        <label className="px py-1.5 text-base text-white">Long Break</label>
        <input
          type="number"
          required
          onChange={(e) => setInput(e.target.value)}
          className="rounded-md border-none bg-gray-300 px-2 py-1.5 text-base text-black transition-colors focus:bg-white"
          value={input}
          defaultValue={15}
          min={0}
        />
        <label className="px py-1.5 text-base text-white">Session Count</label>
        <input
          type="number"
          required
          onChange={(e) => setInput(e.target.value)}
          className="0 rounded-md border-none bg-gray-300 px-2 py-1.5 text-base text-black transition-colors focus:bg-white"
          value={input}
          defaultValue={2}
          min={0}
        />
      </form>
      <button className="mt-3 rounded-lg bg-gray-300 px-4 py-1 text-base text-black transition-all duration-300 hover:bg-white">
        Submit
      </button>
    </div>
  );
};

export default TimerSetting;
