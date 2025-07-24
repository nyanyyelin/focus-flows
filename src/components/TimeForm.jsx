const TimeForm = ({ onSubmitStart, input, setInput }) => {
  return (
    <form onSubmit={onSubmitStart} className="mt-3">
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
  );
};

export default TimeForm;
