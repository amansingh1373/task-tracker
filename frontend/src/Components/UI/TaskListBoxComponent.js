import { colors } from "../../contants";
import '../../Styles/TaskListBoxComponent.css';
import TaskComponent from "./TaskComponent";
const TaskListBoxComponent = (props) => {
    
    return ( 
        <div className = 'taskbox'>
            <div className='taskboxheader'  style={{backgroundColor:colors[props.tasktype]}}>{props.tasktype}</div>
            <div className="taskboxcontent">
                <TaskComponent/>
                <TaskComponent/>
                <TaskComponent/>
            </div>
        </div>
     );
}
 
export default TaskListBoxComponent;