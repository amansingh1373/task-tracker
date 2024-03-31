import '../../Styles/TaskComponent.css';

const TaskComponent = () => {
    return ( 
        <div className="taskwrapper">
            <div className='taskheader'>
                <div className='tasktitle'>lorem ipsum</div>
                <div className='taskpriority'>p0</div>
            </div>
            <div className='taskdescription'>lorem ipsum dolor se amet </div>
            <div className='taskactions'>
                <div className='taskassignee'>@amansingh</div>
                <div className='action'></div>
            </div>
            <div className='taskstatus'>assign</div>
        </div>
    );
}
 
export default TaskComponent;