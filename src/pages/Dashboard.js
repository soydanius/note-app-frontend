import "./Dashboard.css";
import NoteList from "../components/NoteList";

const Dashboard = (first) => {
  return (
    <div className="container">
      <NoteList />
    </div>
  );
};

export default Dashboard;
