import { PiDotsThreeBold } from 'react-icons/pi';
const TaskItem = ({ task, status, priority }) => {
  return (
    <div className="mt-2 grid grid-cols-[5rem_23rem_15rem_15rem_10rem] items-center py-2 text-base">
      <input type="checkbox" className="h-4 w-5 justify-self-center" />
      <div>{task}</div>
      <div className="border-bordergray justify-self-start border-1">
        {status}
      </div>
      <div className="py justify-self-start rounded-xl border px-3 py-0.5">
        {priority}
      </div>
      <PiDotsThreeBold className="justify-self-end text-2xl" />
    </div>
  );
};

export default TaskItem;
