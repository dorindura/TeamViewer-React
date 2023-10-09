import "./TaskViewer.css";
import TaskCard from "../task-card/TaskCard";

function TaskViewer(props) {
    return (
        <div className="task-viewer-atributes">
            <div className="task-list-atributes">
                <TaskCard 
                id={props.tasks[0].id}
                status={props.tasks[0].status}
                name={props.tasks[0].name}
                dueDate={props.tasks[0].dueDate}
                />
                <TaskCard 
                id={props.tasks[1].id}
                status={props.tasks[1].status}
                name={props.tasks[1].name}
                dueDate={props.tasks[1].dueDate}
                />
                <TaskCard 
                id={props.tasks[2].id}
                status={props.tasks[2].status}
                name={props.tasks[2].name}
                dueDate={props.tasks[2].dueDate}
                />

            </div>
        </div>
    );
}

export default TaskViewer;