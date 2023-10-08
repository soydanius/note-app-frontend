import "./Dashboard.css";
import NoteEditor from "../components/NoteEditor";
import NoteList from "../components/NoteList";

const Dashboard = () => {
  return (
    <div className="container">
      {/* <NoteEditor /> */}
      <NoteList />
    </div>
  );
};

export default Dashboard;
