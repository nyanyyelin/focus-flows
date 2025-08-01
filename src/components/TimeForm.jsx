const TimeForm = ({ onSubmitStart, input, setInput }) => {
  return (
    <div className="h-[35rem] w-[30rem]">
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
    </div>
  );
};

export default TimeForm;
