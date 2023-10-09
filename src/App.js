import "./App.css";
import TaskViewer from "./components/Task-viewer/TaskViewer";

function App() {
  const data = [
    {
      id: "T-1",
      name: "Create a Design System for Enum Workspace.",
      status: "Todo",
      dueDate: new Date(2022, 5, 23),
    },
    {
      id: "T-2",
      name: "12 Create a Design System for Enum Workspace.",
      status: "In Progress",
      dueDate: new Date(2022, 7, 24),
    },
    {
      id: "T-3",
      name: "13 Create a Design System for Enum Workspace.",
      status: "Complete",
      dueDate: new Date(2022, 6, 13),
    },
  ];

  return (
    <div className="app-container">
      <div className="app-content">
        <h3>Task Manager</h3>
        <TaskViewer tasks={data} />
      </div>
    </div>
  );
}

export default App;
