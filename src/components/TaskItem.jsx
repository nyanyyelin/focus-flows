import { PiDotsThreeBold } from 'react-icons/pi';
const TaskItem = ({ task, status, priority, dueDate, dueTime }) => {
  return (
    <div
      className={`border-bordergray grid grid-cols-[5rem_20rem_10rem_10rem_15rem_8rem] items-center border-t py-2 text-base`}
    >
      <input
        type="checkbox"
        className="h-4 w-5 justify-self-center rounded-lg"
        checked={status === 'Completed'}
      />
      <div className={`${status === 'Completed' ? 'line-through' : ''}`}>
        {task}
      </div>
      <div className="border-bordergray justify-self-start rounded-xl border px-3 py-0.5 text-blue-400">
        {status}
      </div>
      <div className="border-bordergray justify-self-start rounded-xl border px-3 py-0.5 text-amber-400">
        {priority}
      </div>
      <div
        className={`justify-self-start ${status === 'Completed' ? 'line-through' : ''}`}
      >
        {dueDate} at {dueTime}
      </div>
      <PiDotsThreeBold className="justify-self-center text-2xl" />
    </div>
  );
};

export default TaskItem;
