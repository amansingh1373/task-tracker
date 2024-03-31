import Header from '../Components/UI/HeaderComponent.js';
import TaskListBoxComponent from '../Components/UI/TaskListBoxComponent.js';
import '../Styles/DashBoard.css';
import { TaskType } from '../contants.js';

const DashBoard = () => {
    return ( 
        <>
            <Header/>
            <TaskContainer/>
        </>
     );
}

const TaskContainer = () => { 
    return(
        <div className='taskcontainer'>
            <FilterSortComponent />
            <TaskListComponent />
        </div>
    )
}
 
const FilterSortComponent = () => {
    return ( 
        <div className='filtersortcontainer'>
            <h1>FilterSortComponent</h1>
        </div>
     );
}

const TaskListComponent = () => {
    return ( 
        <div className='tasklistcontainer'>
            {
                TaskType.map((tasktype) => {
                    return <TaskListBoxComponent tasktype = {tasktype}/>
                })
            }
        </div>
     );
}
 
export default DashBoard;