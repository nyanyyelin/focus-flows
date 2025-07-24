import Timer from '../components/Timer';
import Tasks from '../components/Tasks';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <Timer />
      <Tasks />
    </div>
  );
};

export default Dashboard;
